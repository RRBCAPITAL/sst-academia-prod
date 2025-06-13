"use client"

import { useRouter } from "next/navigation";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import Link from 'next/link';

const ValidarCertificado = (props: {
  setOpen: (open: boolean) => void,
  open: boolean,
  codigo: string,
  setCodigo: (codigo: string) => void
}) => {
  const router = useRouter();

  const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCodigo(e.target.value);
  };

  const handleBuscar = async () => {
    const cursoID = props.codigo.substring(0, 3);
    const userDNI = props.codigo.substring(3);

    try {
      const response = await apiClient.get(
        `/usuario-curso-info-acreditacion?curso_id=${cursoID}&user_dni=${userDNI}`
      );

      if (response.data.success) {
        router.push(`/certificado/${props.codigo}`);
        props.setOpen(false);
      } else {
        alert("Ingresa un código válido.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
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
          sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}
        >
          Validar
        </Button>
      </Box>
    </Modal>
  )
}

export default ValidarCertificado