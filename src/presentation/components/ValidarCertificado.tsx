"use client"

import { useRouter } from "next/navigation";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import Link from 'next/link';
import { useState } from "react";

const ValidarCertificado = (props: {
  setOpen: (open: boolean) => void,
  open: boolean,
  codigo: string,
  setCodigo: (codigo: string) => void
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCodigo(e.target.value);
  };

  const handleBuscar = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/certificados/${props.codigo}`);
      if (response.data && response.data?.nombres) {
        setAlert({ type: 'success', message: '¡Certificado válido!' });
        setTimeout(() => {
          router.push(`/info-certificado/${props.codigo}`);
          props.setOpen(false);
        }, 1500);
      } else {
        setAlert({ type: 'error', message: 'Código inválido. Intenta nuevamente.' });
      }
    }  catch (error: any) {
        const errorMessage =
          error?.response?.data?.error ||
          error?.message ||             
          'Ocurrió un error al validar el certificado.';
      
        setAlert({ type: 'error', message: errorMessage });
      } finally {
      setLoading(false);
    }
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  } as const;

  return (
    <Modal open={props.open} onClose={() => props.setOpen(true)} aria-labelledby="modal-title">
      <Box sx={modalStyle}>
        <Box sx={{ display: 'flex', flexGrow: 0 }}>
          <Link href="/" passHref>
            <img
              src="/images/logos/logo-sst.png"
              alt="SST Academia Logo"
              style={{
                display: 'block',
                width: '260px',
                height: 'auto',
                marginBottom: '24px'
              }}
            />
          </Link>
        </Box>
        <Typography id="modal-title" variant="h4" component="h3" sx={{ marginBottom: '20px', }}>
          Verificar un certificado
        </Typography>
        <TextField
          label="INTRODUCE EL CÓDIGO"
          variant="outlined"
          fullWidth
          value={props.codigo}
          onChange={handleCodigoChange}
          margin="normal"
        />
        <Typography id="modal-title" variant="h6" component="h6" sx={{ fontSize: '14px', fontWeight: '400', marginBottom: '20px' }}>
          El código aparece en la parte inferior del certificado
        </Typography>
        <Button
          variant="contained"
          fullWidth
          onClick={handleBuscar}
          disabled={loading}
          sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}
        >
          {loading ? 'Validando...' : 'Validar'}
        </Button>
        <Snackbar
          open={!!alert}
          autoHideDuration={4000}
          onClose={() => setAlert(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => setAlert(null)} severity={alert?.type} sx={{ width: '100%' }} variant="filled">
            {alert?.message}
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  )
}

export default ValidarCertificado