'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme, Box, useMediaQuery } from '@mui/material';
import ContainerFormPayment from '../components/checkout/ContainerFormPayment';
import ResumenPedido from '../components/checkout/ResumenPedido';
import { IFormYapeX } from '../components/checkout/interfaces/form-yape.interface';
import { IFormCardX } from '../components/checkout/interfaces/form-card.interface';
import { useCurso } from '@/src/application/context/CursoContext';
import { useUser } from '../hooks/useUser.hook';
import { useRouter } from 'next/navigation';

const CheckoutPaymentPage = ({ onRegistrationComplete, activeStep, steps }: { onRegistrationComplete: () => void, activeStep: number, steps: string[] }) => {
  const { cursoSeleccionado } = useCurso();
  const { user } = useUser();
  const cardBrickRef = useRef<any>(null);
  const [brickReady, setBrickReady] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mercadoPago, setMercadoPago] = useState<any>(null);

  const [paymentYape, setPaymentYape] = useState<boolean>(false);

  const [country, setCountry] = useState('PE');
  const [saveCard, setSaveCard] = useState(true);
  const [loading, setLoading] = useState(false);

  // yape 
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [otpError, setOtpError] = useState(false);

  const isValidPhone = (phone: string) => /^9\d{8}$/.test(phone);

  const isOtpComplete = () => otp.every((digit) => digit !== '');

  // useEffect(() => {
  //   if (!cursoSeleccionado) {
  //     router.push('/');
  //   }
  // }, [cursoSeleccionado]);

  // if (!cursoSeleccionado) return null

  useEffect(() => {
    const loadMercadoPago = async () => {
      if (!(window as any).MercadoPago) {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.async = true;
        script.onload = () => {
          const mp = new (window as any).MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
            locale: 'es-PE',
          });
          setMercadoPago(mp);
        };
        document.body.appendChild(script);
      } else {
        const mp = new (window as any).MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
          locale: 'es-PE',
        });
        setMercadoPago(mp);
      }
    };

    loadMercadoPago();
  }, []);

  const handleYape = async () => {
    if (!phone || !isValidPhone(phone)) {
      setStatus({ type: 'error', message: 'Por favor ingresa un número de celular válido.' });
      return;
    }

    if (!isOtpComplete()) {
      setOtpError(true);
      setStatus({ type: 'error', message: 'El código de verificación debe tener 6 dígitos.' });
      return;
    }

    if (!(window as any).MercadoPago) {
      setStatus({ type: 'error', message: 'SDK de Mercado Pago no disponible.' });
      return;
    }

    setLoading(true);

    try {
      const yape = mercadoPago.yape({ otp: otp.join(''), phoneNumber: phone });
      const yapeToken = await yape.create();

      const response = await fetch('/api/checkout/payment-yape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          yape_token: yapeToken.id,
          amount: 3,
          payer_email: user?.correo,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Pago realizado correctamente' });
        console.log('🧾 Resultado:', result);
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
      } else {
        const errorMsg = result?.error || 'Error desconocido en el pago';
        setStatus({ type: 'error', message: errorMsg });
        console.error('❌ Error desde backend:', result);
      }
    } catch (error) {
      console.error('❌ Error generando token:', error);
      setStatus({ type: 'error', message: `Error generando token de Yape: ${error}` });
    } finally {
      setLoading(false);
    }
  };

  const FormYapeX: IFormYapeX = {
    phone,
    setPhone,
    otp,
    setOtp,
    status,
    setStatus,
    otpError,
    setOtpError,
    isValidPhone,
    isOtpComplete,
  }

  const FormCardX: IFormCardX = {
    saveCard,
    setSaveCard
  }

  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'block', // vertical en mobile
            sm: 'flex',  // horizontal desde md en adelante
          },
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <ContainerFormPayment
          isMobile={isMobile}
          country={country}
          setCountry={setCountry}
          paymentYape={paymentYape}
          setPaymentYape={setPaymentYape}
          FormYapeX={FormYapeX}
          FormCardX={FormCardX}

          cardBrickRef={cardBrickRef}
          brickReady={brickReady}
          setBrickReady={setBrickReady}
          loading={loading}
          onLoadingChange={setLoading}

          onRegistrationComplete={onRegistrationComplete}
          activeStep={activeStep}
          steps={steps}
        />
        <ResumenPedido
          isMobile={isMobile}
          paymentYape={paymentYape}
          handleYape={handleYape}
          loading={loading}
          cardBrickRef={cardBrickRef}
          cursoSeleccionado={cursoSeleccionado}
        />
      </Box>
    </>
  );
};

export default CheckoutPaymentPage;
