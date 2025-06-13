"use client";

import React, { useState, useEffect } from "react";
import {
  Fab,
  Box,
  Container,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import ValidarCertificado from "../components/ValidarCertificado";
import CardsCursosPacksComponent from "../components/ContainerCursosPacksComponent";
import LandingContainerComponent from "../components/Landing/LandingContainerComponent";

const HomePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [codigo, setCodigo] = useState<string>("");
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  // Mostrar el botón cuando el usuario ha hecho scroll hacia abajo
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }
  };

  // Subir al inicio de la página
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Añadir evento de scroll para mostrar u ocultar el botón
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ with: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <ResponsiveAppBar />
      <Box
           sx={{
            display: 'flex', // Para habilitar flexbox
            justifyContent: 'center', // Centrado horizontal
            alignItems: 'center', // Centrado vertical
            background: '#ff914d',
            width: '100%',
    
            textAlign: 'center',
            fontSize: {
              xs: '1.2rem',
              md: '1.5rem',
              lg: '2rem'
            },
            color: 'white',
            fontWeight: 'bold',
            overflowX: 'hidden',
            margin: '0',
            marginTop: '60px',
            marginBottom: { xs: '20px' },
            padding: {
              xs: '20px',
              md: '40px',
            }   
          }}
      >
        Programas de Especialización
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 'auto',
        }}
      >
        <CardsCursosPacksComponent />
      </Container>
      <LandingContainerComponent />
      {open && <ValidarCertificado setOpen={setOpen} open={open} codigo={codigo} setCodigo={setCodigo} />}
      <Footer />

      {/* Botón flotante para subir al inicio */}
      {showScrollButton && (
        <Fab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            color: 'white'
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
  );
};

export default HomePage;
