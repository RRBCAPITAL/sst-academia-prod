"use client";

import { useCurso } from "@/src/application/context/CursoContext";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser.hook";
import { useParams } from "next/navigation";
import { Box } from "@mui/material";
import CheckoutPaymentPage from "./Checkout-Page";
import FormRegistro from "../components/checkout/FormRegistro";
import { deslugify } from "../utils/deslugify";
import { dataCursos } from "../data/cursos";

const steps = ['Registro', 'Pago', 'Campus Virtual'];

const CheckoutStepPage = () => {
  const { cursoSeleccionado, setCursoSeleccionado } = useCurso();
  const { user } = useUser();
  const params = useParams();
  const nombre = params?.nombre as string | undefined;

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!cursoSeleccionado && nombre) {
      const nombreCurso = deslugify(nombre);

      if (!nombreCurso) {
        if (typeof window !== 'undefined') {
          window.location.href = "/";
        }
        return;
      }

      const quitarTildes = (texto: string) =>
        texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const curso = dataCursos.find(d =>
        quitarTildes(d.nombre) === quitarTildes(nombreCurso)
      );

      if (!curso) {
        return
      }
      setCursoSeleccionado(curso);
    }
  }, [cursoSeleccionado, nombre, setCursoSeleccionado]);

  useEffect(() => {
    if (user) {
      setActiveStep(1);
    }
  }, [user])

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleRegistrationComplete = () => {
    handleNextStep();
  };

  return (
    <Box sx={{
      overflowX: 'hidden',
      overflowY: 'auto',
      boxSizing: 'border-box',
    }}>
      {activeStep === 0 && (
        <FormRegistro onRegistrationComplete={handleRegistrationComplete} activeStep={activeStep} steps={steps} />
      )}

      {activeStep === 1 && (
        <CheckoutPaymentPage onRegistrationComplete={handleRegistrationComplete} activeStep={activeStep} steps={steps} />
      )}
    </Box>
  );
}
export default CheckoutStepPage;