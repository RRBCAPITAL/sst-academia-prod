"use client"

import React from 'react'
import { useState, useEffect } from "react";
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import Link from "next/link";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Skeleton,
  LinearProgress,
} from "@mui/material";
import { useCurso } from '@/src/application/context/CursoContext';
import { useUser } from '../../hooks/useUser.hook';


interface User {
  user_id: number;
  nombres: string;
  apellidos: string;
}

const CampusVirtualInicio = () => {
    const { setCursoSeleccionado } = useCurso();
    const { user } = useUser();
  const [cursos, setCursos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar la carga
  const [cursoProgreso, setCursoProgreso] = useState<any[]>();


  useEffect(() => {
    // Función para obtener la lista de cursos

    const fetchCursos = async () => {
      setLoading(true);
      try {
        // Realiza la solicitud HTTP para obtener los cursos
        const res1 = await apiClient.get(`/campus-virtual/usuario-cursos?user_id=${user?.user_id}`); // Cambia la URL según tu configuración de API
        setCursos(res1.data.curso);

        const res2 = await apiClient.get(`/campus-virtual/usuario-curso-info-progreso?user_id=${user?.user_id}`);
        res2.data.success && setCursoProgreso(res2.data.progresoCurso);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    if(user){
      fetchCursos();
    }
  }, [user]);

  return (
    <Grid sx={{ maxWidth: '1200px', margin: {
      xs: '0',
      md: '0 20px'
    } }}>
      {/* <Typography sx={{ marginTop: {
        xs: '130px',
        sm: '140px',
        md: '180px',
        lg: '200px'
      }, marginBottom: '10px', fontWeight: 'bold', color: '#737373', fontSize: '1rem' }}>Tus cursos activos</Typography> */}
      <Grid component="section"
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",        // 1 columna en móviles (<600px)
          sm: "1fr 1fr",    // 2 columnas en tablets (≥600px)
          md: "1fr 1fr",    // 2 columnas en desktop medio (≥900px)
          lg: "repeat(3, 1fr)" // 3 columnas en pantallas grandes (≥1200px)
        }}
        sx={{
          width: { sm: "100vw", md: "100%" },
          gap: { xs: 2 },
          pt: 0,
          p: 0,
          marginTop: {
            xs: '140px',
            sm: '155px',
            md: '180px',
            lg: '230px'
          }, marginBottom: '10px',
          alignItems: "center",
          maxWidth: {
            sm: '768px',
            md: '968px',
            lg: '1440px'
          },
        }}>
        {loading ? (
          // Muestra un skeleton mientras se cargan los datos
          <Grid size={{ xs: 12 }}>
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Grid>
        ) : cursos.length > 0 ? (
          cursos.map((curso) => {
            const progreso = cursoProgreso?.find((i) => i.curso_id === curso.curso_id);

            return (
              <Grid component="div"
                sx={{ width: '100%', margin: "auto", m: 0, p: 2, background: '#F6F6F6', borderRadius: '20px', border: '2px solid rgb(235, 235, 235)', position: 'relative' }} key={curso.curso_id}>
                <Card sx={{ width: "fit-content", margin: "auto", p: 0, background: '#F6F6F6', boxShadow: 'none' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: '24px',
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover'
                    }}
                    image={
                      curso.imagen ||
                      "https://www.dfk.pe/wp-content/uploads/2022/06/ref-1064x480.png"
                    } // Usa una imagen predeterminada si no hay imagen del curso
                    alt={`Imagen de ${curso.nombre}`}
                  />

                  <Box sx={{ width: "100%", mt: 2 }}>
                    <LinearProgress
                      variant="determinate"
                      value={Math.round(Number(progreso?.porcentaje_completado))}
                      sx={{
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#e9d7cd",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#ff914d",
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      padding: "6px 10px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      color: "white",
                      background: "#ff914d",
                      width: "fit-content",
                      textAlign: "center",
                      marginTop: '12px'
                    }}
                  >
                    Progreso {Math.round(Number(progreso?.porcentaje_completado))}%
                  </Typography>

                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        padding: "2px 0",
                        fontSize: "1.2rem",
                        color: "#37423B",
                        //height: "60px",
                      }}
                    >
                      {curso.nombre}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between", // Alinea los elementos a los extremos
                        gap: 2,
                        width: "100%", // Asegura que ocupe todo el ancho disponible
                      }}
                    >
                    </Box>
                    <Link
                      href={`/campus-virtual/curso/${curso?.curso_id}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => setCursoSeleccionado(curso)}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          mt: 2,
                          fontSize: "1rem",
                          fontWeight: "500",
                          background: "none",
                          border: "2px solid #ff914d",
                          boxShadow: 'none',
                          p: 1,
                          borderRadius: "20px",
                          color: "#ff7017",
                          transition: "background 0.3s ease, color 0.3s ease",
                          "&:hover": {
                            background: "#ff914d",
                            color: "white",
                            borderColor: "#ff914d",
                          },
                        }}
                      >
                        {Math.round(Number(progreso?.porcentaje_completado)) > 0 ? 'Continuar curso' : 'Empezar curso'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            )

          })
        ) : (
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">No se encontraron cursos.</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default CampusVirtualInicio