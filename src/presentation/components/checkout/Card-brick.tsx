import { Alert, Box, Snackbar } from "@mui/material";
import { useEffect, useRef, useImperativeHandle } from "react";
import { useMercadoPagoSDK } from "../../hooks/useMercadoPagoSDK";
import { useCurso } from "@/src/application/context/CursoContext";
import { useUser } from "../../hooks/useUser.hook";
import { useRouter } from "next/navigation";

const CONTAINER_ID = "cardPaymentBrick_container_unique";

type CardBrickProps = {
  brickReady: boolean;
  setBrickReady: (ready: boolean) => void;
  onLoadingChange: (loading: boolean) => void;
  loading: boolean;
  ref: any,
  status: { type: 'success' | 'error'; message: string } | null,
  setStatus: (status: { type: 'success' | 'error'; message: string } | null) => void,
};

const CardBrick = (props: CardBrickProps) => {
  const { cursoSeleccionado } = useCurso();
  const { user } = useUser();
  const router = useRouter();
  const brickControllerRef = useRef<any>(null);
  const { setBrickReady, onLoadingChange, loading, ref, status, setStatus } = props;
  const sdkReady = useMercadoPagoSDK();

  useEffect(() => {
    if (!sdkReady) return; // Solo crear cuando SDK listo

    const initializeBrick = async () => {
      if (brickControllerRef.current) {
        console.log('Brick ya inicializado:', brickControllerRef.current);
        return;
      }; // Ya inicializado

      const mp = new window.MercadoPago(
        process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
        { locale: "es-PE" }
      );

      const bricksBuilder = mp.bricks();

      const controller = await bricksBuilder.create(
        "cardPayment",
        CONTAINER_ID,
        {
          initialization: {
            amount: 3,
            payer: { email: user?.correo },
          },
          customization: {
            paymentMethods: { maxInstallments: 1 },
          },
          callbacks: {
            onReady: () => {
              setBrickReady(true);
              console.log("Brick ready");
            },
            onSubmit: async (cardFormData: any) => {
              onLoadingChange(true);
              return fetch("/api/checkout/process-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData),
              })
                .then((res) => res.json())
                .then(async (data) => {
                  onLoadingChange(false);
                  console.log("Pago procesado:", data);
                  if (data.payment_status === 'approved') {
                    // 1. Mostrar alerta
                    setStatus({ type: 'success', message: 'Pago realizado correctamente' });

                    // 2. Llamar a tu API para dar acceso al curso
                    await fetch('/api/users-courses', {
                      method: 'POST',
                      body: JSON.stringify({
                        userId: user?.user_id,
                        cursos: [cursoSeleccionado?.curso_id],
                      }),
                      headers: { 'Content-Type': 'application/json' },
                    });
                    // // 3. Redirigir al usuario
                    router.push('/campus-virtual');
                  } else if (data.payment_status === 'rejected') {
                    // Si el pago fue rechazado, mostrar mensaje de error
                    setStatus({ type: 'error', message: `${data.message} ${JSON.stringify(data.reason, null, 2)}` });
                    return
                  } else {
                    // Si el pago tiene un estado no esperado
                    setStatus({ type: 'error', message: data.message || data.error || 'Error desconocido.' });
                    return
                  }
                })
                .catch((error) => {
                  onLoadingChange(false);
                  throw error;
                });
            },
            onError: (error: any) => {
              console.error("Error al inicializar el brick:", error);
              setStatus({ type: 'error', message: 'Ocurrió un error al cargar el formulario de pago. Intenta nuevamente.' });
            },
          },
        }
      );

      brickControllerRef.current = controller;
      (window as any).cardPaymentBrickController = controller;

      // Ocultar botón default
      const observer = new MutationObserver(() => {
        const defaultButton = document.querySelector(
          `#${CONTAINER_ID} button`
        ) as HTMLElement;
        if (defaultButton) {
          defaultButton.style.display = "none";
        }
      });
      const target = document.getElementById(CONTAINER_ID);
      if (target) observer.observe(target, { childList: true, subtree: true });
    };

    initializeBrick();

    return () => {
      if (brickControllerRef.current) {
        brickControllerRef.current.unmount();
        brickControllerRef.current = null;
        (window as any).cardPaymentBrickController = null;
      }
    };
  }, [sdkReady, setBrickReady]);

  // Exponer función submit al padre usando forwardRef
  useImperativeHandle(ref, () => ({
    submit: () => {
      if (brickControllerRef.current && typeof brickControllerRef.current.submit === "function") {
        brickControllerRef.current.submit();
      }
    },
    isLoading: loading,
  }));

  return (
    <>
      <Snackbar
        open={Boolean(status)}
        autoHideDuration={6000}
        onClose={() => setStatus(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          sx={{
            width: '100%',
            fontSize: '1.1rem',
            padding: '1rem 1.5rem',
          }}
          severity={status?.type || 'info'}
          onClose={() => setStatus(null)}
          variant="filled"
        >
          {status?.message}
        </Alert>
      </Snackbar>
      <Box maxWidth={450} marginTop={4}>
        <div id={CONTAINER_ID} />
      </Box>
    </>
  );
};

export default CardBrick;
