// hooks/useMercadoPagoSDK.ts
import { useEffect, useState } from "react";

export const useMercadoPagoSDK = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ((window).MercadoPago) {
      setReady(true);
      return;
    }

    const scriptExists = document.getElementById("mp-sdk");
    if (scriptExists) {
      // Esperar a que cargue (agregar listener o un timeout)
      const onLoadHandler = () => setReady(true);
      scriptExists.addEventListener("load", onLoadHandler);
      return () => {
        scriptExists.removeEventListener("load", onLoadHandler);
      };
    }

    const script = document.createElement("script");
    script.id = "mp-sdk";
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);

    // Cleanup si es necesario
    return () => {};
  }, []);

  return ready;
};
