import { Box, Grid, Paper, Typography } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

const LandingSection01 = () => {
    return (
        <Box>
            <Box
                data-aos="fade-top"
                sx={{
                    maxWidth: {
                        sm: '768px',
                        lg: '1440px'
                      },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    marginY: "40px",
                    fontSize: { xs: "20px", md: "26px" },
                }}
            >
                <Typography fontSize="26px" color="white">Educación online</Typography>
                <Typography fontSize="26px" color="white" fontWeight="bold">para tu crecimiento</Typography>
                <Typography fontSize="26px" color="white">profesional</Typography>
            </Box>

            {/* Cuadros principales */}
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{
                    maxWidth: {
                        xs: '90%',
                        sm: '680px'
                    },
                    margin: "auto",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr", // En móviles, una columna
                        sm: "repeat(2, 1fr)", // En pantallas medianas, dos columnas
                    },
                }}
            >
                {/* Primer cuadro */}
                <Grid data-aos="fade-up">
                    <Paper
                        elevation={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <GroupAddIcon sx={{ fontSize: "50px", color: "#ff843d" }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#737373" }}>
                                +1122
                            </Typography>
                            <Typography variant="body1">Estudiantes registrados</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Segundo cuadro */}
                <Grid data-aos="fade-up" data-aos-delay="400">
                    <Paper
                        elevation={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <StarPurple500Icon sx={{ fontSize: "50px", color: "#ff843d" }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#737373" }}>
                                4.7/5
                            </Typography>
                            <Typography variant="body1">Calificaciones</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Tercer cuadro ocupa 2 columnas (toda la fila en sm+) */}
                <Grid
                    data-aos="fade-up"
                    data-aos-delay="200"
                    sx={{
                        gridColumn: {
                            xs: "auto",
                            sm: "1 / -1", // Ocupa ambas columnas en sm+
                        },
                    }}
                >
                    <Paper
                        elevation={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <VerifiedUserIcon sx={{ fontSize: "50px", color: "#ff843d" }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#737373" }}>
                                95%
                            </Typography>
                            <Typography variant="body1">
                                De nuestros estudiantes se vuelven más competitivos en el área SSOMA
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LandingSection01;