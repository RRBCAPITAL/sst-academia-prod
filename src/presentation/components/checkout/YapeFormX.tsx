'use client';

import { useEffect, useRef } from 'react';
import {
    TextField,
    Typography,
    Box,
    Alert,
    Grid,
    Paper,
    Snackbar,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useCurso } from '@/src/application/context/CursoContext';
import { useRouter } from 'next/navigation';
import { IFormYapeX } from './interfaces/form-yape.interface';

const YapeFormX = (props: { FormYapeX: IFormYapeX }) => {
    const { phone, setPhone, otp, setOtp, status, setStatus, otpError, setOtpError, isValidPhone } = props.FormYapeX;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { cursoSeleccionado } = useCurso();
    const router = useRouter();
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.async = true;
        script.onload = () => {
            console.log('✅ SDK MercadoPago cargado');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleOtpChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return; // Solo dígitos y máximo 1 caracter

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
        setOtpError(false); // Quitar error si está escribiendo

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: any, index: number) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '') {
                if (index > 0) {
                    inputsRef.current[index - 1]?.focus();
                }
            } else {
                const updatedOtp = [...otp];
                updatedOtp[index] = '';
                setOtp(updatedOtp);
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = e.clipboardData.getData('text').replace(/\D/g, '');
        if (paste.length === 6) {
            const pasteOtp = paste.split('').slice(0, 6);
            setOtp(pasteOtp);
            pasteOtp.forEach((digit, idx) => {
                const input = inputsRef.current[idx];
                if (input) {
                    input.value = digit;
                }
            });
            inputsRef.current[5]?.focus();
            setOtpError(false);
        }
    };

    useEffect(() => {
        if (!cursoSeleccionado) {
            router.push('/');
        }
    }, [cursoSeleccionado]);

    if (!cursoSeleccionado) return null;

    return (
        <>
            <Box display="flex" alignItems="center" gap={1} sx={{ fontWeight: 'bold', color: '6A1B9A', marginTop: isMobile ? '50px' : '50px', marginBottom: isMobile ? '20px' : '10px', marginX: '10px'}}>

                Yape
                <img
                    src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/06/1-yape-logo-transparencia-2.png"
                    alt="Yape"
                    style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                />

            </Box>
            <Paper sx={{ p: 0, border: 0, boxShadow: 'none', }}>
                <Grid component="div">
                    <Box sx={{ mt: 0, width: '100%', }}>
                        <Paper
                            sx={{
                                padding: 0,
                                borderRadius: 4,
                                background: '#fff',

                                boxShadow: 'none'
                            }}
                        >
                            <Box component="form" noValidate autoComplete="off">
                            <Typography sx={{ mt: 3, mb: 0, fontWeight: 400, color: '#555' }}>
                            Ingresa tu número de celular
                                </Typography>

                                <TextField
                                    fullWidth
                                    label="celular"
                                    placeholder="924165456"
                                    variant="outlined"
                                    margin="normal"
                                    InputLabelProps={{ shrink: true }}
                                    error={!!phone && !isValidPhone(phone)}
                                    helperText={
                                        phone && !isValidPhone(phone)
                                            ? 'Debe ser un número válido de 9 dígitos que empieza con 9'
                                            : ''
                                    }
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <Typography sx={{ mt: 2, mb: 2, fontWeight: 400, color: '#555' }}>
                                    Ingresa el código de aprobación
                                </Typography>

                                <Grid container spacing={isMobile ? 0.5 : 2} justifyContent="center" sx={{ mb: 2 }}>
                                    {otp.map((digit, index) => (
                                        <Grid component="div" key={index}>
                                            <TextField
                                                inputRef={(ref) => (inputsRef.current[index] = ref)}
                                                value={digit}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                onPaste={handlePaste}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    if (/^\d?$/.test(val)) {
                                                        handleOtpChange(val, index);
                                                    }
                                                }}
                                                error={otpError && digit === ''}
                                                sx={{
                                                    '& input': {
                                                        textAlign: 'center',
                                                        fontSize: '1.8rem',
                                                        maxWidth: '2.8rem',
                                                        maxHeight: '2.8rem',
                                                        borderRadius: '8px',
                                                        padding: 0,
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>

                                {otpError && (
                                    <Typography color="error" sx={{ mb: 2, fontWeight: 'bold' }}>
                                        El código de verificación debe tener 6 dígitos.
                                    </Typography>
                                )}

                            </Box>
                            <Typography
                                variant="body2"
                                sx={{ mt: 1, color: '#555', fontStyle: 'italic', textAlign: 'center' }}
                            >
                                ✅ Tu código de aprobación se encuentra en yape
                            </Typography>
                        </Paper>

                        <Snackbar
                            open={Boolean(status)}
                            autoHideDuration={6000}
                            onClose={() => setStatus(null)}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                            <Alert
                                sx={{
                                    width: '100%',
                                    fontSize: '1.1rem',
                                    padding: '1rem 1.5rem',
                                }}
                                severity={status?.type || 'info'}
                                onClose={() => setStatus(null)}
                                variant="filled"
                            >
                                {status?.message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Grid>
            </Paper>
        </>
    );
};

export default YapeFormX;
