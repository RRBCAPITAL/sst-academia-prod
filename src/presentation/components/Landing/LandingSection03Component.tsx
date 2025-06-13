import { Box, Grid, Typography } from "@mui/material";

const LandingSection03 = () => {
    return (
        <Box sx={{
            background: 'white',
            width: '100%',
            margin: 'auto',
            md: { marginTop: "60px" },
            sm: { marginTop: "20px" },
            padding: "10px 30px",
        }}>
            <Grid
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    maxWidth: {
                        sm: '768px',
                        lg: '1000px'
                    },
                    margin: 'auto',
                    marginTop: "40px",
                }}
            >
                {/* Texto a la izquierda */}
                <Grid sx={{
                    margin: 'auto', width: { xs: "100%", md: "100%" }, alignItems: "center",
                }} data-aos="fade-left" data-aos-delay="400">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "20px",
                            padding: '0',
                            textAlign: { xs: "center", md: "left" },
                            fontSize: { xs: "30px", md: "3rem" },
                        }}
                    >
                        Docentes <strong style={{ color: "#ff6c2d" }}>expertos</strong>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "16px", padding: '0', textAlign: { xs: "center", md: "left" } }}
                    >
                        Aprenderás de profesionales que trabajan en las principales
                        empresas.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "16px", padding: '0', textAlign: { xs: "center", md: "left" } }}
                    >
                        Aprende de personas que trabajan en el rubro.
                    </Typography>
                </Grid>

                {/* Imagen del docente a la derecha */}
                <Grid sx={{ marginTop: { xs: '30px', md: '0px' }, margin: 'auto', }} data-aos="fade-right" data-aos-delay="800">
                    <Box
                        component="img"
                        src="/images/img-profe.png"
                        alt="Docente"
                        sx={{ borderRadius: "10px", objectFit: "cover", width: { xs: "100%", md: "100%" } }}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={0}
                sx={{
                    margin: 'auto',
                    marginTop: "100px",
                    marginBottom: "50px",
                    maxWidth: {
                        sm: '768px',
                        lg: '1200px'
                    },
                    borderRadius: '20px',
                    background: '#1F140D',
                    overflow: 'hidden',
                }}
            >
                {/* Imagen a la izquierda */}
                <Grid
                    size={{
                        xs: 0, md: 3
                    }}
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    data-aos="fade-right"
                >
                    <Box
                        component="img"
                        src="https://www.zegelvirtual.com/sites/default/files/productos/resumen-membresia.webp"
                        alt="Certificación"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: "20px 0px 0px 20px",
                        }}
                    />
                </Grid>

                {/* Texto a la derecha */}
                <Grid
                    size={{ xs: 12, md: 9 }}
                    sx={{ padding: '40px' }}
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "30px", md: "36px" },
                            fontWeight: "bold",
                            marginBottom: { xs: '2px', md: "20px" },
                            textAlign: "left",
                            lineHeight: "1",
                            color: 'white'
                        }}
                    >
                        Acceso por 6 meses al <strong style={{ color: "#ff6c2d" }}>Campus virtual</strong>
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: { xs: '20px', md: '40px' } }}>
                        <Typography
                            sx={{
                                width: { xs: '100%', lg: '80%' },
                                color: 'white',
                                marginBottom: "40px",
                                fontSize: "16px",
                                textAlign: "left"
                            }}
                        >
                            Al comprar tu programa de especialización, tendrás acceso a los contenidos grabados por 06 meses.
                        </Typography>

                        <Typography
                            sx={{
                                marginBottom: "30px",
                                fontSize: { xs: "20px" },
                                textAlign: "left",
                                color: 'white'
                            }}
                        >
                            🔶 <strong>Accede a tus clases cuando quieras, sin horarios</strong>
                        </Typography>

                        <Typography
                            sx={{
                                color: 'white',
                                marginBottom: { xs: "0px", md: "30px" },
                                fontSize: { xs: "20px" },
                                textAlign: "left"
                            }}
                        >
                            🔶 <strong>Accede a tus clases las veces que quieras</strong>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LandingSection03;