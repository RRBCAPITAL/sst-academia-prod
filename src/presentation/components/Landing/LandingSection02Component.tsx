import { Box, Grid, Typography } from "@mui/material";

const LandingSection02 = () => {
    return (
      <Box
      sx={{
        maxWidth: {
            sm: '768px',
            lg: '1440px'
          },
        margin: 'auto',
        md: { marginTop: "60px" },
        sm: { marginTop: "20px" },
        padding: "40px 20px",
      }}
    >
      <Grid alignItems="center" justifyContent="center" marginBottom="40px" sx={{
        display: "grid",
        gap: '3rem',
        gridTemplateColumns: {
            xs: "1fr", // En móviles, una columna
            sm: "repeat(2, 1fr)", // En pantallas medianas, dos columnas
        },
      }}>
        {/* Imagen a la izquierda */}
        <Grid data-aos="fade-right" data-aos-delay="300">
          <Box
            component="img"
            src="/images/IMG_Certificado.png"
            alt="Certificación"
            sx={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
          />
        </Grid>

        {/* Texto a la derecha */}
        <Grid data-aos="fade-left" data-aos-delay="600">
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: { xs: "center", md: "left" },
              lineHeight: { xs: "1", lg: "0.3"},
              color: "white"
            }}
          >
            Certifícate al aprobar
          </Typography>
          <Typography
            variant="h4"
            sx={{
            fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: { xs: "center", md: "left" },
              lineHeight: 1,
              color: "#ff6c2d"
            }}
          >
            tus programas
          </Typography>
          <Typography
            variant="body1"
            sx={{ width: '90%', marginBottom: "40px", fontSize: "16px", textAlign: "left", color: 'white' }}
          >
            Al finalizar un programa tendrás que aprobar un examen y te
            emitiremos un certificado digital que valide tus conocimientos.
          </Typography>
          <Typography
            data-aos="fade-left" data-aos-delay="900"
            variant="body1"
            sx={{ color: 'white', marginBottom: { xs: "15px", md: "30px" }, fontSize: { xs: "20px", }, textAlign: "left" }}
          >
            🔶 <strong>Certificado con código único</strong>
          </Typography>
          <Typography
            data-aos="fade-left" data-aos-delay="1200"
            variant="body1"
            sx={{ marginBottom: { color: 'white', xs: "15px", md: "30px" }, fontSize: { xs: "20px", }, textAlign: "left" }}
          >
            🔶 <strong>Mejora tu CV</strong>
          </Typography>
          <Typography
            data-aos="fade-left" data-aos-delay="1500"
            variant="body1"
            sx={{ fontSize: { color: 'white', xs: "20px", }, textAlign: "left" }}
          >
            🔶 <strong>Impulsa tu carrera profesional</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
    )
}

export default LandingSection02;