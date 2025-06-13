import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { descuentos } from "../../utils/descuentos";
import { useCurso } from "@/src/application/context/CursoContext";

const DetallesPedido = () => {
    const { cursoSeleccionado } = useCurso()

    if (!cursoSeleccionado) return null;

    const precioSinDescuento = descuentos
        .filter((item) => item.id === cursoSeleccionado.curso_id)
        .map((item) => item.precio_descuento)[0];
    const precioConDescuento = cursoSeleccionado.precio;
    const descuentoAplicado = Math.floor(precioSinDescuento) - Math.floor(Number(precioConDescuento));

    return (
        <>
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        md: '50%'
                    },
                    backgroundColor: '#F6F7F9',
                    display: 'flex',
                    justifyContent: {
                        xs: 'center',
                        sm: 'flex-start'
                    },
                    alignItems: '',
                    pl: {
                        sm: 0,
                        md: 2,
                        lg: 4
                    },
                    marginBottom: {
                        xs: '40px',
                        sm: '0'
                    }
                }}
            >
                <Box maxWidth="400px" width="100%" sx={{
                    background: 'none', boxShadow: 'none', marginTop: {
                        xs: '0',
                        sm: '126px'
                    }
                }}>
                    <Paper sx={{ p: 3, background: 'none', boxShadow: 'none' }}>
                        <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Resumen del pedido</Typography>
                        <Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px', gap: 4 }}>
                            <Typography variant="body2" sx={{ fontSize: '14px' }}>Curso:</Typography>
                            <Typography variant="body2" sx={{ fontSize: '14px' }}>{cursoSeleccionado.nombre} </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px' }}>
                            <Typography variant="body2" sx={{ fontSize: '14px' }}>Precio original:</Typography>
                            <Typography variant="body2" sx={{ fontSize: '14px' }}>S/ {precioSinDescuento}.00 </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" sx={{ marginTop: '10px' }}>
                            <Typography variant="body2" sx={{ fontSize: '14px' }}>Descuentos:</Typography>
                            <Typography variant="body2" color="green" sx={{ fontSize: '14px' }}>
                                S/ -{descuentoAplicado}.00
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '16px' }}>Total (1 curso):</Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '16px' }}>S/ {precioConDescuento}.00 </Typography>
                        </Box>


                    </Paper>

                    <Paper sx={{ p: 3, width: 'fit-content', margin: '10px auto' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Empieza a mejorar tu futuro hoy mismo</Typography>
                        <Typography variant="body2">
                            Garantías de la mejor preparación a nivel profesional.
                        </Typography>
                    </Paper>
                </Box>
            </Box>

        </>
    );
}
export default DetallesPedido;