"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from '@mui/material';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

interface CertificadoProps {
  params: {
    codigo: string;
  };
}

const Certificado: React.FC<CertificadoProps> = ({ params }) => {
  const [certificadoData, setCertificadoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const { codigo } = params;
  console.log('codigo certificadod ', codigo);
  

  const fetchCertificadoData = async () => {
    try {
      console.log('entre aqui ');

      const response = await apiClient.get(`/certificados/${codigo}`);
      console.log('entre response ', response);

      if (response?.data) {
        setCertificadoData(response.data);
        setLoading(false);
        setError(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error: any) {
      console.error('Error al obtener certificado:', error?.response || error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (codigo) {
      fetchCertificadoData();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [codigo]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6">Cargando...</Typography>
      </Box>
    );
  }

  if (error || !certificadoData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6">No se encontró información para este certificado o ocurrió un error.</Typography>
      </Box>
    );
  }

  const nombres = certificadoData?.nombres ?? '';
  const apellidos = certificadoData?.apellidos ?? '';
  const curso_nombre = certificadoData?.curso_nombre ?? '';
  const nombre_completo = apellidos ? nombres + ' ' + apellidos : nombres;
  return (
    <Box
      sx={{
        position: 'fixed',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/07/05/09/59/students-5372390_1280.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <TableContainer component={Paper} sx={{ opacity: 0.95, maxWidth: '1200px', padding: '4px' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            padding: 2,
            textAlign: 'center',
            borderRadius: '6px',
            border: '1px solid #ddd',
            fontSize: '16px',
            background: '#ff914d',
            color: 'white',
          }}
        >
          Detalles del estudiante
        </Typography>

        {!isMobile ? (
          // Vista en modo escritorio (tabla horizontal)
          <Table sx={{ minWidth: '600px' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  <strong>Código de Certificado</strong>
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  <strong>Nombre y Apellidos</strong>
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  <strong>Programa de Especialización</strong>
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  <strong>Estado</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>{codigo}</TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  {nombre_completo}
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '16px' }}>
                  {curso_nombre}
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd', textAlign: 'center', fontSize: '20px' }}>
                  <FileDownloadDoneIcon style={{ color: '#45c600' }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          // Vista en modo móvil (formato vertical, campos a la izquierda, valores a la derecha)
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: 2,
                border: '1px solid #ddd',
                paddingY: 1,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Código de Certificado
              </Typography>
              <Typography textAlign="left" sx={{ marginRight: '60px' }}>{codigo}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: 2,
                border: '1px solid #ddd',
                paddingY: 1,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Nombre y Apellidos
              </Typography>
              <Typography textAlign="left">{nombre_completo}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: 2,
                border: '1px solid #ddd',
                paddingY: 1,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Programa de Especialización
              </Typography>
              <Typography textAlign="left">{curso_nombre}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: 2,
                border: '1px solid #ddd',
                paddingY: 1,
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Estado
              </Typography>
              <FileDownloadDoneIcon style={{ color: '#45c600', marginRight: '120px' }} />
            </Box>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
};

export default Certificado;
