"use client"

import { Box, TextField, Button, Divider, Typography, Alert, Stepper, Step, StepLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import DetallesPedido from './DetallesPedido';
import LoginButton from '../LoginButton';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/src/infrastructure/auth/firebase/firebase-client';
import CustomStepIcon from "../ui/CustomStepIcon";

const FormRegistro = ({ onRegistrationComplete, activeStep, steps }: { onRegistrationComplete: () => void, activeStep: number, steps: string[] }) => {

  const [validateSucess, setValidateSucess] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contrasenia: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { contrasenia, nombres, apellidos, correo } = formData;

      try {
        const res = await apiClient.get(`/auth/validate-email/${correo}`);
        if (res.data) {
          const userCredential = await signInWithEmailAndPassword(auth, correo, contrasenia);
          const idToken = await userCredential.user.getIdToken();

          await apiClient.post('/auth/session-password', { idToken });
          setValidateSucess(true);
          return;
        } else {
          // 1. Crear usuario en Firebase
          const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasenia);

          // Obtener ID Token
          const idToken = await userCredential.user.getIdToken();

          // 3. Enviar email de verificación
          // await sendEmailVerification(userCredential.user);

          await apiClient.post(
            '/auth/register-login',
            {
              nombres,
              apellidos,
              correo
            },
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );

          await apiClient.post('/auth/session-password', { idToken });

          setSuccessMsg('Registro exitoso.');
          setValidateSucess(true);
          return
        }

      } catch (err: any) {
        throw new Error(err);
      }




    } catch (error: any) {
      console.error('Error en registro:', error);
      setErrorMsg(error.message || 'Ocurrió un error al registrar.');
    } finally {
      setLoading(false);
    }
  };

  const isFormComplete = Object.values(formData).every((val) => val.trim() !== '');

  useEffect(() => {
    if (validateSucess) {
      onRegistrationComplete();
    }
  }, [validateSucess]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden', // 🔒 Desactiva scroll horizontal
        overflowY: 'auto',   // ⚖️ Scroll vertical solo cuando se necesite
        boxSizing: 'border-box',

      }}
    >


      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%'
          },
          display: 'flex',
          justifyContent: {
            xs: 'center',
            sm: 'flex-end'
          },
          minHeight: {
            xs: '100vh',
            md: 'auto'
          },
          pr: {
            xs: 0,
            md: 2,
            lg: 4
          },
          marginBottom: {
            xs: '20px',
            sm: '0'
          },
          boxSizing: 'border-box',
        }}
      >

        <Box sx={{
          marginTop: '100px', maxWidth: {
            sx: '350px',
            sm: '400px'
          }
        }}>
          <Stepper activeStep={activeStep} alternativeLabel >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  sx={{
                    '& .MuiStepIcon-root': {
                      position: 'relative',
                      // Oculta el icono interno duplicado que no tiene número
                      '& svg': { display: 'none' },
                    },
                    '& .MuiStepLabel-label': {
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Typography variant="h6" align="center" gutterBottom mb={2} sx={{ color: '#393939', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '50px', px: '10px' }}>
            Identificación
          </Typography>

          <Typography mb={2} sx={{ px: '10px' }}>
            Solicitamos únicamente la información esencial para la finalización de la compra.
          </Typography>

          <Box sx={{ px: '10px' }}>
            <LoginButton setValidateSucess={setValidateSucess} />
          </Box>


          <Divider sx={{ my: 3, color: 'gray', px: '10px' }}>Otras opciones de inicio de sesión</Divider>

          <Box component="form" noValidate autoComplete="off" mt={2} sx={{ px: '10px' }}>
            <TextField fullWidth label="Nombres" name="nombres" value={formData.nombres} onChange={handleChange} sx={textFieldStyle} />
            <TextField fullWidth label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} sx={textFieldStyle} />
            <TextField fullWidth label="Correo" name="correo" type='email' value={formData.correo} onChange={handleChange} sx={textFieldStyle} />
            <TextField fullWidth label="Contraseña" name="contrasenia" type="password" value={formData.contrasenia} onChange={handleChange} sx={textFieldStyle} />

            {errorMsg && <Alert severity="error" sx={{ mt: 2 }}>{errorMsg}</Alert>}
            {successMsg && <Alert severity="success" sx={{ mt: 2 }}>{successMsg}</Alert>}

            <Button
              fullWidth
              variant="contained"
              disabled={!isFormComplete || loading}
              onClick={handleRegister}
              sx={{
                mt: 2,
                padding: '10px 0px',
                borderRadius: '8px',
                fontSize: '1rem',
                color: 'white',
                backgroundColor: '#FF914D',
                '&:disabled': {
                  backgroundColor: 'rgba(255, 102, 0, 0.5)', // naranja opaco
                  color: 'white', // si quieres mantener el texto blanco
                },
              }}
            >
              {loading ? 'Registrando...' : 'Registrarme'}
            </Button>
          </Box>

        </Box>
      </Box>

      <DetallesPedido />
    </ Box>
  );
};

const textFieldStyle = {
  input: { color: 'black' },
  label: { color: 'black' },
  mb: 2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'gray' },
    '&:hover fieldset': { borderColor: '#FF914D' },
  },
};

export default FormRegistro;
