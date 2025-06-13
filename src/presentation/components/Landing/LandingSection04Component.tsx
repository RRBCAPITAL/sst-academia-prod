import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const LandingSection04 = () => {
    return (
        <Box sx={{background: '#f6f6f6', width: '100%'}}>
            <Box sx={{ maxWidth: "1200px", margin: 'auto', padding: "40px 20px" }} data-aos="fade">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "40px",
                        fontSize: { xs: "30px", md: "36px" },
                        color: "#737373",
                    }}
                >
                    Lo que dicen nuestros
                    <strong style={{ color: "#ff6c2d" }}> alumnos</strong>
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Reseña 1 */}
                    <Grid size={{ xs: 12, sm: 4}} data-aos="fade-up" data-aos-delay="300">
                        <Paper
                            elevation={3}
                            sx={{
                                padding: "30px",
                                borderRadius: "20px",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Avatar
                                src="/images/P1.png"
                                alt="Alumno 1"
                                sx={{
                                    width: 80,
                                    height: 80,
                                    margin: "0 auto",
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "10px" }}
                            >
                                Luis Manrique
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: "italic", color: "#737373" }}
                            >
                                &quot;Es el primer programa virtual que llevo, así que me pareció muy
                                didáctico y sobre todo entendible.&quot;
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Reseña 2 */}
                    <Grid size={{ xs: 12, sm: 4}} data-aos="fade-up" data-aos-delay="600">
                        <Paper
                            elevation={3}
                            sx={{
                                padding: "30px",
                                borderRadius: "20px",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Avatar
                                src="/images/P3.png"
                                alt="Alumno 2"
                                sx={{
                                    width: 80,
                                    height: 80,
                                    margin: "0 auto",
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "10px" }}
                            >
                                Kátia Valle
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: "italic", color: "#737373" }}
                            >
                                &quot;Gracias a SST Academy pude encontrar un puesto en el área SSOMA
                                ya que la mayoría de las empresas buscan que tengas certificados
                                adicionales en el área.&quot;
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Reseña 3 */}
                    <Grid size={{ xs: 12, sm: 4}} data-aos="fade-up" data-aos-delay="900">
                        <Paper
                            elevation={3}
                            sx={{
                                padding: "30px",
                                borderRadius: "20px",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Avatar
                                src="/images/P2.png"
                                alt="Alumno 3"
                                sx={{
                                    width: 80,
                                    height: 80,
                                    margin: "0 auto",
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "10px" }}
                            >
                                David León
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: "italic", color: "#737373" }}
                            >
                                &quot;El programa que llevé me ayudó a enriquecer mis conocimientos
                                en SST, ahora tengo un panorama más claro del área.&quot;
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ maxWidth: {
                    sm: '768px',
                    lg: '1440px'
                }, margin: 'auto', marginTop: { xs: '10px', md: "60px" }, padding: "40px 20px"}}>
                <Typography
                    data-aos="fade"
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "40px",
                        fontSize: { xs: "30px", md: "36px" },
                        color: "#737373",
                    }}
                >
                    Convenios con
                    <strong style={{ color: "#ff6c2d" }}> empresas</strong>
                </Typography>

                <Grid container spacing={1} justifyContent="center">
                    <Grid size={{ xs: 12, sm: 3 }} data-aos="fade-up" data-aos-delay="300">
                        <Avatar
                            src="/images/E1.png"
                            alt="Empresa 1"
                            sx={{
                                width: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                height: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                margin: "0 auto",
                                marginBottom: "20px",
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }} data-aos="fade-up" data-aos-delay="600">
                        <Avatar
                            src="/images/E2.png"
                            alt="Empresa 2"
                            sx={{
                                width: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                height: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                margin: "0 auto",
                                marginBottom: "20px",
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }} data-aos="fade-up" data-aos-delay="900">
                        <Avatar
                            src="/images/E3.png"
                            alt="Empresa 3"
                            sx={{
                                width: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                height: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                margin: "0 auto",
                                marginBottom: "20px",
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }} data-aos="fade-up" data-aos-delay="800">
                        <Avatar
                            src="/images/E4.png"
                            alt="Empresa 4"
                            sx={{
                                width: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                height: {
                                    xs: '150px',
                                    lg: '200px'
                                },
                                margin: "0 auto",
                                marginBottom: "20px",
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default LandingSection04;