'use client';

import { IconButton, TextField, Button, Divider, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import LoginButton from '../LoginButton';
import { UserInterface } from '../../interfaces/user.interface';

interface LoginDrawerProps {
  setOpenLogin: (open: boolean) => void;
  openLogin: boolean;
  setStudent: (student: UserInterface | null) => void;
  email: string;
  setEmail: (email: string) => void;
  setStep: (step: number) => void;
}

export default function LoginDrawerPrincipal(props: LoginDrawerProps) {
  const { setOpenLogin, setStudent, email, setEmail, setStep } = props;

  const validateEmail = async () => {
    try {
      const res = await apiClient.get(`/auth/validate-email/${email}`);
      if (res.data) {
        setStudent(res.data);
        setStep(1);
      } else {
        setStudent(null);
        setStep(2);
      }

    } catch (err: any) {
      throw new Error(err);
    }
  };

  return (
    <>
      <IconButton
        onClick={(() => setOpenLogin(false))}
        sx={{ position: 'absolute', top: 8, right: 8, color: 'black' }}
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
        Ingresar o crear una cuenta con:
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

      <Button fullWidth variant="contained" onClick={validateEmail} sx={{ padding: '10px 0px', fontSize: '1rem', color: 'white' }} endIcon={<EastIcon />}>
        Continuar
      </Button>

      <Divider sx={{ my: 3, color: 'gray' }}>Otras opciones de inicio de sesión</Divider>

      <LoginButton />
    </>
  );
}
