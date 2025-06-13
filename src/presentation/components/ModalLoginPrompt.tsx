'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { useModalLogin } from '../context/ModalLoginContext';
import { useLogin } from '../context/LoginContext';

export const ModalLoginPrompt = () => {
  const { open, hideModal } = useModalLogin();
  const { setOpenLogin } = useLogin();

  return (
    <Dialog
      open={open}
      onClose={hideModal}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, mb: 1 }}>
        <WarningAmberRoundedIcon color="warning" sx={{ fontSize: 36 }} />
        <DialogTitle sx={{
          fontWeight: 'bold', color: 'warning.main', m: 0, fontSize: {
            xs: '1.2rem',
            md: '1.5rem'
          }
        }}>
          Acción requerida
        </DialogTitle>
      </Box>

      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', textAlign: 'center' }}>
          Para continuar con la compra, debes iniciar sesión en tu cuenta.
        </Typography>
      </DialogContent>

      <DialogActions sx={{
        justifyContent: 'space-between', px: {
          sx: 0,
          md: 3
        }, pb: 2
      }}>
        <Button
          variant="outlined"
          onClick={hideModal}
          sx={{
            borderRadius: 2,
            px: 3,
            textTransform: 'none',
            color: 'grey.700',
            '&:hover': { border: '1px solid #FF914D' },
          }}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            hideModal();
            setOpenLogin(true);
          }}
          sx={{
            borderRadius: 2,
            px: 3,
            textTransform: 'none',
            backgroundColor: 'warning.main',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'warning.dark' },
          }}
        >
          Acceder
        </Button>
      </DialogActions>
    </Dialog>
  );
};
