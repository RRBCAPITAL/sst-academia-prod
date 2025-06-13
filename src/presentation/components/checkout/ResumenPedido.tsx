"use client";

import { Button, CircularProgress, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { descuentos } from "../../utils/descuentos";
import LockIcon from '@mui/icons-material/Lock';

const ResumenPedido = (props: { isMobile: boolean, paymentYape: boolean, handleYape: () => void, loading: boolean, cardBrickRef: any, cursoSeleccionado: any }) => {
    const { isMobile, paymentYape, handleYape, loading, cursoSeleccionado } = props;

    const precioSinDescuento = descuentos
        .filter((item) => item.id === cursoSeleccionado.curso_id)
        .map((item) => item.precio_descuento)[0];
    const precioConDescuento = cursoSeleccionado.precio;
    const descuentoAplicado = Math.floor(precioSinDescuento) - Math.floor(Number(precioConDescuento));

    return (
        <>
            {!isMobile ? (
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
                        paddingBottom: '100px'
                    }}
                >
                    <Box maxWidth="400px" width="100%" sx={{ background: 'none', boxShadow: 'none', marginTop: '126px' }}>
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

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                onClick={paymentYape ? handleYape : () => {
                                    const defaultButton = document.querySelector('#cardPaymentBrick_container_unique button') as HTMLElement;
                                    if (defaultButton) {
                                        defaultButton.click();
                                    }
                                }}
                                disabled={loading}
                                startIcon={<LockIcon sx={{ color: 'white' }} />}
                                sx={{ mt: 8, color: 'white', fontWeight: 'bold' }}
                            >
                                {loading ? <CircularProgress size={24} /> : `Pagar S/ ${precioConDescuento}.00  `}
                            </Button>
                        </Paper>

                        <Paper sx={{ p: 3, width: 'fit-content', margin: '10px auto'}}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Empieza a mejorar tu futuro hoy mismo</Typography>
                            <Typography variant="body2">
                                Garantías de la mejor preparación a nivel profesional.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 2000,
                        backgroundColor: '#fff',
                        boxShadow: '0px -4px 16px rgba(0,0,0,0.1)',
                        p: 2,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    }}
                >
                    <Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography fontWeight="bold" sx={{ fontSize: '1rem' }}>Total:</Typography>
                            <Typography fontWeight="bold" sx={{ fontSize: '1rem' }}>S/ {precioConDescuento}.00</Typography>
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={paymentYape ? handleYape : () => {
                                const defaultButton = document.querySelector('#cardPaymentBrick_container_unique button') as HTMLElement;
                                if (defaultButton) {
                                    defaultButton.click();
                                }
                            }}
                            disabled={loading}
                            startIcon={<LockIcon sx={{ color: 'white' }} />}
                            sx={{ mt: 2, color: 'white', fontWeight: 'bold', fontSize: '1rem' }}
                        >
                            {loading ? <CircularProgress size={24} /> : `Pagar S/ ${precioConDescuento}.00`}
                        </Button>

                        <Divider sx={{ my: 1 }} />

                        <Typography variant="subtitle1" fontWeight="bold">Resumen del pedido</Typography>
                        <Box display="flex" justifyContent="space-between" mt={1}>
                            <Typography variant="body2">Curso:</Typography>
                            <Typography variant="body2">{cursoSeleccionado.nombre}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body2">Precio original:</Typography>
                            <Typography variant="body2">S/ {precioSinDescuento}.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body2">Descuento:</Typography>
                            <Typography variant="body2" color="green">S/ -{descuentoAplicado}.00</Typography>
                        </Box>

                    </Box>
                </Box>
            )}
        </>
    )
}
export default ResumenPedido;