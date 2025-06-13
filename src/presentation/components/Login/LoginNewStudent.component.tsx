'use client';

import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/src/infrastructure/auth/firebase/firebase-client';
import LoginPasswordPostRegisterUser from './LoginPasswordPostRegisterUser';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';

export default function RegisterStep({
  setOpenLogin,
  email,
  setStep,
}: {
  setOpenLogin: (openLogin: boolean) => void;
  email: string;
  setStep: (step: number) => void;
}) {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    contrasenia: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { contrasenia, nombres, apellidos } = formData;

      // 1. Crear usuario en Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, contrasenia);

      // Obtener ID Token
      const idToken = await userCredential.user.getIdToken();

      // 3. Enviar email de verificación
      // await sendEmailVerification(userCredential.user);

      await apiClient.post(
        '/auth/register-login',
        {
          nombres,
          apellidos,
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      setEmailSent(true);
      setSuccessMsg('Registro exitoso.');

    } catch (error: any) {
      console.error('Error en registro:', error);
      setErrorMsg(error.message || 'Ocurrió un error al registrar.');
    } finally {
      setLoading(false);
    }
  };

  // Reenviar correo de verificación
  // const resendVerificationEmail = async () => {
  //   if (auth.currentUser) {
  //     try {
  //       await sendEmailVerification(auth.currentUser);
  //       setSuccessMsg('Correo de verificación reenviado.');
  //     } catch (error: any) {
  //       setErrorMsg(error.message || 'Error al reenviar correo de verificación.');
  //     }
  //   }
  // };

  const isFormComplete = Object.values(formData).every((val) => val.trim() !== '');

  return (
    <>
      {/* Botones de navegación */}
      <IconButton sx={{ position: 'absolute', top: 12, left: 12, color: '#737373' }} onClick={() => setStep(0)}>
        <ArrowBackIcon />
      </IconButton>

      <IconButton sx={{ position: 'absolute', top: 12, right: 12, color: '#737373' }} onClick={() => setOpenLogin(false)}>
        <CloseIcon />
      </IconButton>

      {/* Logo */}
      <Box display="flex" justifyContent="center" fontSize={24} mt={4}>
        <img src="/images/logos/logo-sst.png" alt="SST Academia Logo" style={{ width: '180px', height: 'auto' }} />
      </Box>

      {!emailSent ? (
        <>
          <Typography variant="h6" align="center" gutterBottom mt={4} sx={{ color: '#393939', fontWeight: 'bold' }}>
            Crear nuevo usuario
          </Typography>

          <Box component="form" noValidate autoComplete="off" mt={2}>
            <TextField fullWidth label="Nombres" name="nombres" value={formData.nombres} onChange={handleChange} sx={textFieldStyle} />
            <TextField fullWidth label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} sx={textFieldStyle} />
            <TextField fullWidth label="Contraseña" name="contrasenia" type="password" value={formData.contrasenia} onChange={handleChange} sx={textFieldStyle} />

            {errorMsg && <Alert severity="error" sx={{ mt: 2 }}>{errorMsg}</Alert>}
            {successMsg && <Alert severity="success" sx={{ mt: 2 }}>{successMsg}</Alert>}

            <Button
              fullWidth
              variant="contained"
              disabled={!isFormComplete || loading}
              onClick={handleRegister}
              sx={{ mt: 2, padding: '10px 0px', borderRadius: '8px', fontSize: '1rem', color: 'white' }}
            >
              {loading ? 'Registrando...' : 'Registrarme'}
            </Button>
          </Box>
        </>
      ) : (
        <>
          {/* <Typography align="center" mt={2} sx={{ color: '#555' }}>
            Te enviamos un correo para verificar tu cuenta. Por favor, verifica tu email para continuar.
          </Typography> */}

          {errorMsg && <Alert severity="error" sx={{ mt: 2 }}>{errorMsg}</Alert>}
          {successMsg && <Alert severity="success" sx={{ mt: 2 }}>{successMsg}</Alert>}
          {/* 
          <Button variant="outlined" fullWidth onClick={resendVerificationEmail} sx={{ mt: 4 }}>
            Reenviar correo de verificación
          </Button> */}

          <LoginPasswordPostRegisterUser setOpenLogin={setOpenLogin} nombres={''} email={email} setStep={setStep} />
          {/* <Button
            variant="contained"
            fullWidth
            onClick={checkEmailVerified}
            disabled={checkingVerification}
            sx={{ mt: 2, color: 'white' }}
          >
            {checkingVerification ? 'Verificando...' : 'Ya verifiqué mi correo'}
          </Button> */}
        </>
      )}
    </>
  );
}

const textFieldStyle = {
  input: { color: 'black' },
  label: { color: 'black' },
  mb: 2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'gray' },
    '&:hover fieldset': { borderColor: '#FF914D' },
  },
};
