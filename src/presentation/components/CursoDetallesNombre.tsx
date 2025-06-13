"use client";

import React, { useEffect, useState } from "react";
import apiClient from "@/src/infrastructure/http/AxiosHttpClient";
import VimeoPlayer from "./VimeoPlayer";
import { Fade, Grow, Skeleton } from "@mui/material";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { deslugify } from "../utils/deslugify";
import Rutas from "./Rutas";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useTheme, useMediaQuery } from "@mui/material";
import { descuentos } from "../utils/descuentos";
import { useParams } from 'next/navigation';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useCurso } from "@/src/application/context/CursoContext";
import { CursoDTO } from "@/src/application/dto/get-all-courses-public.dto";
import { useRouter } from "next/navigation";
import { slugify } from "../utils/slugify";

const CursoDetallesNombre = () => {
  const { setCursoSeleccionado, cursoSeleccionado } = useCurso();
  const router = useRouter()
  const params = useParams();
  const nombre = params?.nombre as string | undefined;

  // Estado local para manejar el curso cargado si no hay uno seleccionado
  const [cursoLocal, setCursoLocal] = useState<CursoDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleUnitClick = (unidadId: string) => {
    setExpandedUnit(expandedUnit === unidadId ? null : unidadId);
  };

  useEffect(() => {
    if (!cursoSeleccionado && nombre) {
      const nombreCurso = deslugify(nombre);
      if (!nombreCurso) {
        setLoading(false);
        return;
      }

      apiClient.get<CursoDTO>(`/courses-details/by-name/${nombreCurso}`)
        .then((res) => {
          setCursoLocal(res.data);
          setError(null);
        })
        .catch((err) => {
          setError(`Error al cargar el curso: ${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [cursoSeleccionado, nombre]);


  const cursoToRender = cursoSeleccionado ?? cursoLocal;

  // Aquí gestionamos el caso en que `nombre` no exista
  if (!nombre) {
    return
  }
  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", maxWidth: '100vw', overflowX: 'hidden', marginTop: '60px' }}>
        <Box sx={{ padding: 2, marginTop: '100px', maxWidth: '1200px', margin: 'auto' }}>
          <Skeleton variant="rectangular" width="100%" height={124} animation="wave" sx={{ marginBottom: 4 }} />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Skeleton variant="rectangular" height={400} animation="wave" sx={{ marginBottom: 2 }} />
              <Skeleton variant="text" height={40} width="80%" />
              <Skeleton variant="text" height={30} width="60%" />
              <Skeleton variant="rectangular" height={60} width="100%" sx={{ mt: 2 }} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton variant="text" height={30} width="60%" />
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={100} width="100%" sx={{ mb: 2 }} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
  if (error) return <p>{error}</p>;
  if (!cursoToRender) return <p>No se encontró el curso</p>;

  return (
    <Box sx={{ paddingBottom: '20px', minHeight: "100vh", maxWidth: '100vw', overflowX: 'hidden', marginTop: '60px' }}>
      <Box
        sx={{
          display: 'flex', // Para habilitar flexbox
          justifyContent: 'center', // Centrado horizontal
          alignItems: 'center', // Centrado vertical
          background: '#ff914d',
          width: '100%',

          textAlign: 'center',
          fontSize: {
            xs: '1.2rem',
            md: '1.5rem',
            lg: '2rem'
          },
          color: 'white',
          fontWeight: 'bold',
          overflowX: 'hidden',
          margin: '0',
          padding: {
            xs: '20px',
            md: '40px',
          }

        }}
      >
        {loading ? "Cargando..." : cursoToRender.nombre}
      </Box>


      <Grid container spacing={0}
        sx={{
          flexDirection: { xs: "column" }, // Para pantallas pequeñas, columna; para grandes, fila
          maxWidth: '1200px',
          margin: 'auto',
          padding: '0 10px '
        }}
      >
        <Rutas cursoNombre={cursoToRender?.nombre} />
        <Grid container spacing={0}
          sx={{
            flexDirection: { xs: "column", md: "row" }, // Para pantallas pequeñas, columna; para grandes, fila
            maxWidth: '1200px',
            margin: 'auto',
            padding: '0 10px '
          }}
        >
          <Grid size={{ xs: 12, md: 8 }} sx={{ position: "relative", padding: { xs: '0px', md: '0 20px' }, margin: { xs: '0px', md: '0px' }, marginTop: { xs: '0px', md: '0px' } }} >
            <Card
              key={cursoToRender.curso_id}
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%", // Proporción 16:9
                  mb: 2,
                }}
              >
                <VimeoPlayer video_url={cursoToRender.video_intro} />
              </Box>
              <CardContent

                sx={{
                  border: '1px solid #ff914d',
                  backgroundColor: 'white',
                  color: '#333',
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              >
                <Typography
                  variant="h4"
                  paragraph
                  sx={{
                    my: 0,
                    marginBottom: {
                      xs: '20px',
                      md: '40px'
                    },
                    fontSize: {
                      xs: '0.9rem',
                      md: '1rem',
                      lg: "1.1rem"
                    },
                    lineHeight: {
                      xs: '1.4',
                    },
                    color: "black",
                    textShadow: " 0 0 1px rgba(0, 0, 0, 0.1);",
                  }}
                >
                  {cursoToRender.descripcion}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between", // Alinea los elementos a los extremos
                      gap: 2,
                      width: "100%", // Asegura que ocupe todo el ancho disponible
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: { xs: '0.7rem', md: "1rem" },
                        color: "white",
                        fontWeight: "bold",
                        padding: { xs: '2px 10px', md: '2px 20px' },
                        background: "#ff0000",
                      }}
                    >
                      20% de dscto.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {/* Precio con descuento tachado */}
                      <Typography
                        variant="h1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          color: '#494949',
                          fontWeight: '400',
                          textDecoration: 'line-through', // Tachado
                        }}
                      >
                        S/ {descuentos
                          .filter(item => item.id === cursoToRender.curso_id)
                          .map(item => item.precio_descuento)}
                      </Typography>

                      {/* Precio original */}
                      <Typography
                        variant="h1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "1.4rem", md: "1.6rem" },
                          color: '#ff7f3a',
                          fontWeight: 'bold',
                        }}
                      >
                        S/ {Math.floor(Number(cursoToRender.precio))}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", // Alinea los elementos a los extremos
                    gap: 2,
                    width: "100%", // Asegura que ocupe todo el ancho disponible
                  }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GroupAddIcon sx={{ marginRight: '10px', fontSize: '1.6rem' }} /> {cursoToRender.duracion} {isMdUp && 'estudiantes'}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarBorderIcon /> 4.5{" "}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  onClick={(e) => {
                    e.preventDefault(); // Previene que el Link haga redirect por sí solo
                    setCursoSeleccionado(cursoToRender);
                    router.push(`/checkout/${slugify(cursoToRender.nombre)}`);
                  }}
                  variant="contained"
                  sx={{
                    fontSize: {
                      xs: '1rem',
                      md: "1.2rem"
                    },
                    fontWeight: "bold",
                    padding: "10px 12px",
                    borderRadius: "6px",
                    width: "100%",
                    color: 'white'
                  }}
                >

                  <ShoppingCartCheckoutIcon sx={{ paddingRight: '4px' }} />
                  Comprar ahora
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ order: { xs: 2, md: 1 }, p: { xs: 2, md: 0 } }}
          >
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
              sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.5rem' }}
            >
              Contenido del Curso
            </Typography>

            <Box key={cursoToRender.curso_id}>
              {cursoToRender.unidad.map((unidad, idx) => (
                <Grow in timeout={400 + idx * 100} key={unidad.nombre}>
                  <Card
                    variant="outlined"
                    sx={{
                      mb: 2,
                      width: '100%',
                      border: '1px solid #ff914d',
                      backgroundColor: 'white',
                      color: '#333',
                      borderRadius: 2,
                      boxShadow: 2,
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent sx={{ px: 2, py: 1 }}>
                      <Box
                        onClick={() => handleUnitClick(unidad.unidad)}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          userSelect: 'none',
                          py: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontSize: '1rem',
                            color: '#444',
                            fontWeight: 600,
                            flexGrow: 1,
                          }}
                        >
                          <strong>{unidad.unidad}:</strong> {unidad?.nombre}
                        </Typography>
                        <IconButton aria-label="expand">
                          {expandedUnit === unidad.unidad ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </IconButton>
                      </Box>

                      <Collapse in={expandedUnit === unidad.unidad} timeout="auto" unmountOnExit>
                        <Box sx={{ pl: 2, pt: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{ mb: 1, color: 'text.secondary' }}
                          >
                            Temas
                          </Typography>
                          {unidad.leccion.map((leccion, leccionIndex) => (
                            <Fade
                              in={expandedUnit === unidad.unidad}
                              timeout={300 + leccionIndex * 100}
                              key={leccion.nombre}
                            >
                              <Box>
                                {["C-1", "E-1", "F-1", "G-1", "I-1"].includes(cursoToRender.curso_id) ? (
                                  leccion.nombre?.split(" - ")?.map((frase, index) => (
                                    <Typography
                                      key={`${leccionIndex}-${index}`}
                                      variant="body2"
                                      sx={{ mb: 1, fontSize: '0.95rem' }}
                                    >
                                      {index + 1}. {frase.trim()}
                                    </Typography>
                                  ))
                                ) : (
                                  <Typography
                                    variant="body2"
                                    sx={{ mb: 1, fontSize: '0.95rem' }}
                                  >
                                    {leccionIndex + 1}. {leccion.nombre}
                                  </Typography>
                                )}
                              </Box>
                            </Fade>
                          ))}
                        </Box>
                      </Collapse>
                    </CardContent>
                  </Card>
                </Grow>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CursoDetallesNombre;
