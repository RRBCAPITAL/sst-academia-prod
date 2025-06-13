import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { PackInterface } from "../../interfaces/pack.interface";

const PackComponent = ({ pack }: { pack: PackInterface }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Link
            href={`${pack.url}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <Grid
                key={pack.id}
                component="div"
                sx={{ width: "100%", margin: "auto", p: 2, position: 'relative', background: '#F6F6F6', borderRadius: '20px', border: '2px solid rgb(235, 235, 235)', position: 'relative' }}
            >
                <Card sx={{ boxShadow: 'none', background: 'none' }}>
                    {/* <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            p: "6px 10px",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                            color: "white",
                            background: "#ff914d",
                            width: "fit-content",
                            textAlign: "center",
                            position: "absolute",
                            top: '10px',
                            right: '10px',
                        }}
                    >
                        Pack de Documentos
                    </Typography> */}
                    <CardMedia
                        component="img"
                        sx={{ borderRadius: '30px', height: 'fit-content' }}
                        image={pack.imagenInicio}
                        alt={`Imagen de ${pack.nombre}`}
                    />
                    <CardContent sx={{ background: '#F6F6F6', }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                pt: 1,
                                pb: 1,
                                fontSize: "1.2rem",
                                color: "#37423B",
                                height: "40px",
                                fontWeight: "bold"
                            }}
                        >
                            {pack.nombre}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 2,
                                width: "100%",
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#ff7017",
                                }}
                            >
                                <GroupAddIcon sx={{ mr: 1.25, fontSize: "1.6rem" }} />{" "}
                                {pack.estudiantes} {isMdUp && "estudiantes"}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography
                                    variant="h1"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: "0.9rem",
                                        color: "#494949",
                                        fontWeight: "400",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    S/ {pack.antes}
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
                                    S/ {Math.floor(pack.precio)}
                                </Typography>
                            </Box>
                        </Box>
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
                            Comprar Pack
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Link>
    )

}

export default PackComponent;