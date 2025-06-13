'use client';

import { Box, Typography, TextField, Button, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/src/infrastructure/auth/firebase/firebase-client';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';

export default function PasswordStep({ setOpenLogin, nombres, email, setStep}:
  { setOpenLogin: (openLogin: boolean) => void, nombres: string, email: string, setStep: (step: number) => void }) {
  
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setErrorMsg('');
    setLoading(true);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
  
      await apiClient.post('/auth/session-password', { idToken });
  
      if (typeof window !== 'undefined') {
        window.location.href = "/";
      }
  
    } catch (error: any) {
      console.error('Error en login:', error);
  
      // Firebase Auth errors
      switch (error.code) {
        case 'auth/wrong-password':
          setErrorMsg('La contraseña es incorrecta. Por favor, inténtalo de nuevo.');
          break;
        case 'auth/user-not-found':
          setErrorMsg('El usuario no existe. Verifica el correo.');
          break;
        case 'auth/invalid-credential':
          setErrorMsg('Credenciales inválidas. Por favor verifica tus datos.');
          break;
        default:
          setErrorMsg('Hubo un problema al iniciar sesión. Intenta nuevamente.');
          break;
      }
  
    } finally {
      setLoading(false);
    }
  };  
  
  return (
    <>
      {/* Botón atrás */}
      <IconButton
        sx={{ position: 'absolute', top: 12, left: 12, color: '#737373' }}
        onClick={() => setStep(0)}
        disabled={loading}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Botón cerrar */}
      <IconButton
        sx={{ position: 'absolute', top: 12, right: 12, color: '#737373' }}
        onClick={() => setOpenLogin(false)}
        disabled={loading}
      >
        <CloseIcon />
      </IconButton>

      {/* Logo */}
      <Box display="flex" justifyContent="center" fontSize={24} mt={4} sx={{ color: 'black' }}>
        <img
          src="/images/logos/logo-sst.png"
          alt="SST Academia Logo"
          style={{
            display: 'block',
            width: '180px',
            height: 'auto',
          }}
        />
      </Box>

      {/* Texto bienvenida */}
      <Typography variant="h6" align="center" gutterBottom mb={2} mt={4} sx={{ color: '#393939', fontWeight: 'bold', fontSize: '1.1rem'}}>
        Hola de nuevo, {nombres}
      </Typography>
      <Typography variant="body2" align="center" mb={3} color="gray">
        Inicia sesión con la contraseña para<br />
        <strong>{email}</strong>
      </Typography>

      {/* Input contraseña */}
      <TextField
        fullWidth
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        sx={{
          input: { color: 'black' },
          label: { color: 'black' },
          mb: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'gray' },
            '&:hover fieldset': { borderColor: '#FF914D' },
          },
        }}
      />

      {/* Mostrar mensaje de error */}
      {errorMsg && (
        <Typography variant="body2" color="error" align="center" mb={2}>
          {errorMsg}
        </Typography>
      )}

      {/* Botón iniciar sesión */}
      <Button
        fullWidth
        variant="contained"
        disabled={!password || loading}
        onClick={handleLogin}
        sx={{ padding: '10px 0px', borderRadius: '8px', fontSize: '1rem', color: 'white' }}
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </Button>

      {/* ¿Olvidaste tu contraseña? */}
      <Box mt={2} textAlign="center" sx={{ marginBottom: { xs: '100px', md: '0px' } }}>
        <Link href="#" underline="hover" color="gray" fontSize={14}>
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>
    </>
  );
}
