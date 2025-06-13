'use client';

import { IconButton, TextField, Button, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';

export default function LoginValidateEmail({ setOpenLogin, setStudent, setStudentNotExist, email, setEmail, setStep }:
  {
    setOpenLogin: (openLogin: boolean) => void,
    openLogin: boolean,
    setStudent: (student: any) => void,
    setStudentNotExist: (studentNotExist: boolean) => void
    email: string,
    setEmail: (email: string) => void,
    setStep: (step: number) => void
  }) {

  const validateEmail = async () => {
    try {
      const { data } = await apiClient.get('/users');

      const usuario = data.data.find((i: any) => i.correo === email.trim().toLowerCase());
      if (usuario) {
        setStudent(usuario);
        setStudentNotExist(false);
        setStep(1);
      } else {
        setStudentNotExist(true);
        setStudent(null);
        setStep(2);
      }

    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <>
      {/* Botón cerrar */}
      <IconButton
        onClick={(() => setOpenLogin(false))}
        sx={{ position: 'absolute', top: 8, right: 8, color: '#737373' }}
      >
        <CloseIcon />
      </IconButton>

      {/* Logo */}
      <Box display="flex" justifyContent="center" fontSize={24} mt={4} sx={{ color: 'black' }}>
        <img
          src="/images/logos/logo-sst.png" // Ruta a la imagen de tu logo
          alt="SST Academia Logo"
          style={{
            display: 'block',
            width: '180px', // Ajusta el tamaño según sea necesario
            height: 'auto',
          }}
        />
      </Box>

      {/* Texto */}
      <Typography variant="h6" align="center" mt={4} mb={2} sx={{ color: 'black' }}>
        Ingresar o crea una cuenta con:
      </Typography>

      {/* Formulario */}
      <TextField
        fullWidth
        variant="outlined"
        label="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          input: { color: 'black' },
          label: { color: 'gray' },
          mt: 1,
          mb: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'gray' },
            '&:hover fieldset': { borderColor: '#FF914D' },
          },
        }}
      />

      <Button fullWidth variant="contained" onClick={validateEmail}
        sx={{
          borderRadius: '8px', padding: '10px 0px', fontSize: '1rem', color: 'white', marginBottom: {
            xs: '100px', md: '0px'
          }
        }} endIcon={<EastIcon />}>
        Continuar
      </Button>

      {/* <Fab
          sx={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            backgroundColor: '#25D366',
            color: 'white',
            '&:hover': {
              backgroundColor: '#1EBE5D',
            },
          }}
        >
          <WhatsAppIcon />
        </Fab> */}
    </>
  );
}
