
"use client";

import { slugify } from "../../utils/slugify";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
    useTheme,
    useMediaQuery
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { descuentos } from "../../utils/descuentos";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useCurso } from "@/src/application/context/CursoContext";
import { useRouter } from 'next/navigation';
import { CursoDTO } from "@/src/application/dto/get-all-courses-public.dto";

const CursoComponent = ({ curso }: { curso: CursoDTO }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const { setCursoSeleccionado } = useCurso();
    const router = useRouter();
    return (
        <Box
            sx={{
                cursor: 'pointer',
            }}
            onClick={(e) => {
                e.preventDefault();
                setCursoSeleccionado(curso);
                router.push(`/cursos-virtuales/${slugify(curso.nombre)}`);
            }}
        >
            <Grid
                key={curso.curso_id}
                component="div"
                sx={{ width: '100%', margin: "auto", m: 0, p: 2, background: '#F6F6F6', borderRadius: '20px', border: '2px solid rgb(235, 235, 235)', position: 'relative' }}
            >
                <Card sx={{ width: "fit-content", margin: "auto", p: 0, background: '#F6F6F6', boxShadow: 'none' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            p: "6px 10px",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                            color: "white",
                            background: "#ff914d",
                            width: "fit-content",
                            textAlign: "center",
                        }}
                    >
                        Programa de especialización
                    </Typography>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
                        }}
                    >
                        <OpenInNewIcon sx={{ fontSize: '18px', color: '#ff914d' }} />
                    </Box>
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
                        }
                        alt={`Imagen de ${curso.nombre}`}
                    />
                    <CardContent>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                pt: 1,
                                fontSize: "1.1rem",
                                color: "#37423B",
                                height: {
                                    sm: '0px',
                                    lg: "40px"
                                },
                                fontWeight: 'bold'
                            }}
                        >
                            {curso.nombre}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 2,
                                width: "100%",
                                marginTop: {
                                    xs: '10px',
                                    sm: '40px',
                                    lg: '10px'
                                }
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: "0.9rem",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#ff7017",
                                }}
                            >
                                <GroupAddIcon sx={{ mr: 1.25, fontSize: "1.2rem" }} />{" "}
                                {curso.duracion} {isMdUp && "estudiantes"}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography
                                    variant="h1"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: "0.7rem",
                                        color: "#494949",
                                        fontWeight: "400",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    S/{" "}
                                    {descuentos
                                        .filter((item) => item.id === curso.curso_id)
                                        .map((item) => item.precio_descuento)}
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: "#ff7f3a",
                                        fontWeight: "bold",
                                    }}
                                >
                                    S/ {Math.floor(Number(curso.precio))}
                                </Typography>
                            </Box>
                        </Box>

                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setCursoSeleccionado(curso);
                                router.push(`/checkout/${slugify(curso.nombre)}`);
                            }}
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
                            Comprar Ahora
                        </Button>

                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
};

export default CursoComponent;
