"use client";

import React, { useEffect, useState } from "react";
import apiClient from "@/src/infrastructure/http/AxiosHttpClient";
import VimeoPlayer from "./VimeoPlayer";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Collapse,
  IconButton,
  LinearProgress,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Link from "next/link";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { DataMaterialsExamen } from "../../utils/DataMaterialsExamen";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useUser } from "../../hooks/useUser.hook";
import { useCurso } from "@/src/application/context/CursoContext";

interface User {
  user_id: number;
  nombres: string;
  apellidos: string;
}

const CampusVirtualCurso = (props: any) => {
  const { user } = useUser();
  const { setCursoSeleccionado } = useCurso();
  const [curso, setCurso] = useState<any[]>([]);
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const [cursoProgreso, setCursoProgreso] = useState<any[]>();
  const [dataLeccionActual, SetDataLeccionActual] = useState<any>();
  const [dataLeccionSeleccionada, setDataLeccionSeleccionada] =
    useState<any>(null);
  const [leccionHecha, setLeccionHecha] = useState<Boolean>(false);

  useEffect(() => {
    const fetchCursos = async () => {
      if (!props?.curso_id || !user?.user_id) return;
  
      try {
        // Detalle del curso
        const res1 = await apiClient.get(
          `/campus-virtual/usuario-curso-detallado?curso_id=${props.curso_id}&user_id=${user.user_id}`
        );
        setCurso(res1.data.curso);
        const cursoRes = res1.data.curso;
        
        setCursoSeleccionado({
          nombre: cursoRes ? String(cursoRes[0].curso_nombre) : `Curso ${props.curso_id}`
        });
        
        // Progreso general del curso
        const res2 = await apiClient.get(
          `/campus-virtual/usuario-curso-info-progreso?user_id=${user.user_id}`
        );
        if (res2.data.success) {
          setCursoProgreso(res2.data.progresoCurso);
        }
  
        // Lección actual y completado
        const res3 = await apiClient.get(
          `/campus-virtual/usuario-curso-progreso?user_id=${user.user_id}&curso_id=${props.curso_id}`
        );
        if (res3.data.success) {
          SetDataLeccionActual(res3.data.startCurso);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
  
    fetchCursos();
  }, [props?.curso_id, user?.user_id]);

  const progreso = cursoProgreso?.find((i) => i.curso_id === props?.curso_id);

  const handleUnitClick = (unidadId: string) => {
    setExpandedUnit(expandedUnit === unidadId ? null : unidadId);
  };

  const handleDownloadCertificado = async (curso_nombre: string) => {
    if (!user || !user.nombres || !user.user_id) {
      alert('El usuario no está definido correctamente. Cierra sesión y vuelve a intentarlo.');
      return;
    }
  
    const nombres_completos =
      user.apellidos && user.apellidos.length > 0
        ? `${user.nombres} ${user.apellidos}`
        : user.nombres;
  
    try {
      const response = await fetch('/api/certificados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_nombre: nombres_completos,
          user_id: user.user_id,
          curso_id: props?.curso_id,
        }),
      });
  
      if (!response.ok) {
        throw new Error('No se pudo generar el certificado');
      }
  
      const blob = await response.blob();
  
      if (typeof window !== 'undefined') {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `certificado - ${curso_nombre}.pdf`;
        document.body.appendChild(link); // asegurarse de que esté en el DOM
        link.click();
        document.body.removeChild(link); // limpieza
        window.URL.revokeObjectURL(url); // liberar memoria
      }
    } catch (error) {
      console.error('Error al descargar el certificado:', error);
      alert('Ocurrió un error al generar el certificado. Intenta nuevamente.');
    }
  };
  

  const videoUrl =
    dataLeccionSeleccionada?.[0]?.video_url ||
    dataLeccionActual?.[0]?.video_intro;
  const leccionNombre =
    dataLeccionSeleccionada?.[0]?.leccion_nombre ||
    dataLeccionActual?.[0]?.leccion_nombre;
  const unidadActual =
    dataLeccionSeleccionada?.[0]?.unidad || dataLeccionActual?.[0]?.unidad;
  const leccionActual =
    dataLeccionSeleccionada?.[0]?.leccion || dataLeccionActual?.[0]?.leccion;

  const handleChangeLeccion = async (leccion_id: number) => {
    try {

      setDataLeccionSeleccionada(null);
      const res = await apiClient.get(
        `/campus-virtual/usuario-leccion-seleccionada?leccion_id=${leccion_id}&user_id=${user?.user_id}`
      );
      if (res.data?.InfoLeccion) {
        setDataLeccionSeleccionada(res.data.InfoLeccion);
      }
    } catch (error) {
      console.error("Error fetching: ", error);
    }
  };

  const handleLeccionHecha = async () => {
    try {
      const leccionId =
        dataLeccionSeleccionada?.[0]?.leccion_id ||
        dataLeccionActual?.[0]?.leccion_id;

      if (!leccionId || !user?.user_id) {
        console.log("Faltan datos de la lección o del usuario");
        return;
      }

      const data = {
        user_id: user.user_id,
        leccion_id: leccionId,
      };

      const res = await apiClient.post(`/campus-virtual/usuario-leccion-hecha`, data);

      if (res.data?.success) {
        setLeccionHecha(!leccionHecha);

        // Actualizar el progreso de la lección completada dentro del curso
        setCurso((prevCurso) =>
          prevCurso.map((cursoItem) => {
            if (cursoItem.curso_id === props?.curso_id) {
              return {
                ...cursoItem,
                unidades: cursoItem.unidades.map((unidad: any) => ({
                  ...unidad,
                  lecciones: unidad.lecciones.map((leccion: any) =>
                    leccion.leccion_id === leccionId
                      ? { ...leccion, completado: true }
                      : leccion
                  ),
                })),
              };
            }
            return cursoItem;
          })
        );
      }
    } catch (error) {
      console.error("Error al marcar la lección como hecha:", error);
    }
  };


  const MaterialExamen = DataMaterialsExamen.find(
    (i) => i.curso_id === props?.curso_id
  );

  return (
    <Box
      sx={{
        paddingBottom: "0px",
        minHeight: "100vh",
        width: "100%",
        margin: "auto",
        marginTop: {
          xs: '115px',
          md: '180px'
        }
      }}
    >
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
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: '20px',
          justifyContent: "center",
          gap: {
            xs: '4px',
            md: '16px'
          }
        }}
      >
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          {curso &&
            curso?.map((curso) => {
              const leccionActualId =
                dataLeccionSeleccionada?.[0]?.leccion_id ||
                dataLeccionActual?.[0]?.leccion_id;

              const unidadActual = curso.unidades.find((unidad: any) =>
                unidad.lecciones.some(
                  (leccion: any) => leccion.leccion_id === leccionActualId
                )
              );

              const leccionActual = unidadActual?.lecciones.find(
                (leccion: any) => leccion.leccion_id === leccionActualId
              );

              const leccionCompletada = leccionActual?.completado;

              return (
                <Card
                  key={curso.curso_nombre}
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
                    }}
                  >
                    <VimeoPlayer video_url={videoUrl} />
                  </Box>
                  <CardContent
                    sx={{
                      background: "#292625",
                      width: "100%",
                      display: "flex",
                      flexDirection: {
                        xs: 'column',
                        md: "row"
                      },
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h4"
                      paragraph
                      sx={{
                        my: 0,
                        marginBottom: {
                          xs: '6px',
                          md: "0px"
                        },
                        marginLeft: {
                          xs: 0,
                          md: "10px"
                        },
                        marginRight: {
                          xs: 0,
                          md: "12px"
                        },
                        fontSize: {
                          xs: '0.9rem',
                          md: '0.9rem'
                        },
                        color: "white",
                        fontWeight: "bold",
                        textShadow: "0 0 1px rgba(0, 0, 0, 0.1);",
                      }}
                    >
                      {(curso.curso_id === "C-1" || curso.curso_id === "E-1" || curso.curso_id === "F-1" || curso.curso_id === "G-1" || curso.curso_id === "I-1")
                        ? leccionNombre
                          ?.split(" - ")
                          ?.map((frase: string, index: number) => (
                            <div key={index}>
                              {index + 1}. {frase.trim()}
                            </div>
                          ))
                        : leccionNombre}
                    </Typography>

                    {leccionCompletada ? (
                      <Typography
                        sx={{
                          background: "#38bb00",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          height: "fit-content",
                        }}
                      >
                        Hecho
                      </Typography>
                    ) : (
                      <Button
                        sx={{
                          background: "#ff7f3f",
                          color: "white",
                          height: "fit-content",
                        }}
                        onClick={() => handleLeccionHecha()}
                      >
                        Marcar como hecho
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </Grid>
        {/* Listado de unidades y lecciones */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 2, md: 1 } }}>
          {unidadActual && leccionActual && (
            <Typography
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {unidadActual}
              {" - "}
              {leccionActual}
            </Typography>
          )}
          {curso &&
            curso?.map((curso) => (
              <Box key={curso.curso_nombre}>
                {curso.unidades.map((unidad: any) => {
                  // Verificar si todas las lecciones de la unidad están completadas
                  const allLessonsCompleted = unidad.lecciones.every(
                    (leccion: any) => leccion.completado
                  );
                  const isCurrentUnit = unidad.unidad === unidadActual;

                  return (
                    <Card
                      key={unidad.unidad_id}
                      variant="outlined"
                      sx={{
                        mb: 1,
                        width: "100%",
                        border: `1px solid ${allLessonsCompleted ? "#01ff3c" : "#ff914d"}`,
                        background: allLessonsCompleted
                          ? "#c7ffd4"
                          : isCurrentUnit
                            ? "#ffe6d9"
                            : "#f6f3f0",
                        color: "#281e1e",
                      }}
                    >
                      <CardContent
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          onClick={() => handleUnitClick(unidad.unidad)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            userSelect: "none",
                            px: 1,
                            py: 1,
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontSize: "1rem",
                              color: isCurrentUnit ? "#ff914d" : "#737373",
                              fontWeight: "bold",
                              flexGrow: 1,
                              textOverflow: "ellipsis",
                            }}
                          >
                            <strong>{unidad.unidad}:</strong>{" "}
                            {unidad.unidad_nombre}
                          </Typography>
                          <IconButton
                            aria-label={
                              expandedUnit === unidad.unidad
                                ? "Ocultar Temas"
                                : "Ver Temas"
                            }
                            sx={{ p: 1 }}
                          >
                            {expandedUnit === unidad.unidad ? (
                              <ExpandLessIcon />
                            ) : (
                              <ExpandMoreIcon />
                            )}
                          </IconButton>
                        </Box>
                        <Collapse in={expandedUnit === unidad.unidad}>
                          <Box sx={{ width: "100%" }}>
                            {unidad.lecciones
                              .sort((a: any, b: any) => a.leccion_id - b.leccion_id) // Ordenar según leccion_id
                              .map((leccion: any, index: number) => {
                                const isCurrentLesson =
                                  leccion.leccion_id ===
                                  (dataLeccionSeleccionada?.[0]?.leccion_id ||
                                    dataLeccionActual?.[0]?.leccion_id);
                                const isCompletedLesson = leccion.completado;

                                return (
                                  <Typography
                                    key={leccion.leccion_id}
                                    variant="body2"
                                    sx={{
                                      my: 1,
                                      py: 1,
                                      px: 1,
                                      fontSize: "0.8rem",
                                      background: isCompletedLesson
                                        ? "#40d400"
                                        : isCurrentLesson
                                          ? "#ff914d"
                                          : "#ffffff",
                                      color: isCompletedLesson
                                        ? "#ffffff"
                                        : isCurrentLesson
                                          ? "#ffffff"
                                          : "#2c2927",
                                      cursor: "pointer",
                                      borderRadius: "5px",
                                    }}
                                    onClick={() =>
                                      handleChangeLeccion(leccion.leccion_id)
                                    }
                                  >
                                    {(curso.curso_id === "C-1" || curso.curso_id === "E-1" || curso.curso_id === "F-1" || curso.curso_id === "G-1" || curso.curso_id === "I-1") ? (
                                      leccion.nombre
                                        ?.split(" - ")
                                        ?.map(
                                          (frase: string, index: number) => (
                                            <div key={index}>
                                              {index + 1}. {frase.trim()}
                                            </div>
                                          )
                                        )
                                    ) : (
                                      <>
                                        {" "}
                                        ● <strong>
                                          Lección {index + 1}
                                        </strong> - {leccion.nombre}
                                      </>
                                    )}
                                  </Typography>
                                );
                              })}
                          </Box>
                        </Collapse>
                      </CardContent>
                    </Card>
                  );
                })}

                <Card
                  variant="outlined"
                  sx={{
                    mb: 1,
                    width: "100%",
                    border: "2px solid #ff7931",
                    background: "#f6f3f0",
                    "&:hover": {
                      border: "2px solid #ff914d", // Cambia el color del borde al pasar el mouse
                      background: "#fff5e6", // Cambia el fondo al pasar el mouse
                    },
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Box
                      onClick={() => handleUnitClick("1")}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        userSelect: "none",
                        px: 1,
                        py: 1,
                      }}
                    >
                      <Link
                        href={MaterialExamen?.materiales_url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          flexGrow: 1,
                          textOverflow: "ellipsis",
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          color: "#ff7f3a",
                        }}
                      >
                        Descargar Materiales
                        <FileDownloadIcon />
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
                {MaterialExamen?.examen_url !== 'none' &&
                  <Card
                    variant="outlined"
                    sx={{
                      mb: 1,
                      width: "100%",
                      border: "2px solid #ff7931",
                      background: "#f6f3f0",
                      "&:hover": {
                        border: "2px solid #ff914d", // Cambia el color del borde al pasar el mouse
                        background: "#fff5e6", // Cambia el fondo al pasar el mouse
                      },
                    }}
                  >
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Box
                        onClick={() => handleUnitClick("1")}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          userSelect: "none",
                          px: 1,
                          py: 1,
                        }}
                      >
                        <Link
                          href={MaterialExamen?.examen_url || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            flexGrow: 1,
                            textOverflow: "ellipsis",
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            color: "#ff7f3a",
                          }}
                        >
                          Ir al Examen Final
                          <EditNoteIcon />
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>}
                  <Card
                    variant="outlined"
                    sx={{
                      mb: 1,
                      width: "100%",
                      border: "2px solid #ff7931",
                      background: "#f6f3f0",
                      "&:hover": {
                        border: "2px solid #ff914d", // Cambia el color del borde al pasar el mouse
                        background: "#fff5e6", // Cambia el fondo al pasar el mouse
                      },
                    }}
                  >
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Box
                        onClick={() => handleDownloadCertificado(curso.curso_nombre)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          userSelect: "none",
                          px: 1,
                          py: 1,
                        }}
                      >
                          Descargar Certificado
                          <VerifiedIcon />

                      </Box>
                    </CardContent>
                  </Card>
              </Box>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampusVirtualCurso;
