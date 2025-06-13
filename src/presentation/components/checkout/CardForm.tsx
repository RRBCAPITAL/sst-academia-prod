// 'use client';

// import { useState } from 'react';
// import {
//     TextField,
//     Button,
//     Typography,
//     Box,
//     CircularProgress,
//     Alert,
//     InputAdornment,
//     MenuItem,
//     FormControlLabel,
//     Checkbox,
//     Divider,
//     Paper,
//     useMediaQuery,
// } from '@mui/material';
// import Script from 'next/script';
// import axios from 'axios';
// import LockIcon from '@mui/icons-material/Lock';
// import LanguageIcon from '@mui/icons-material/Language';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useCurso } from '@/src/application/context/CursoContext';
// import { useRouter } from 'next/navigation';
// import { descuentos } from '../../utils/descuentos';
// import YapeFormX from './YapeFormX';
// import { useTheme } from '@mui/material';
// import CreditCardIcon from '@mui/icons-material/CreditCard';

// const CardForm = () => {
//     const { cursoSeleccionado } = useCurso();
//     const router = useRouter();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     const [paymentYape, setPaymentYape] = useState(false);
//     const [cardNumber, setCardNumber] = useState('');
//     const [expiration, setExpiration] = useState('');
//     const [securityCode, setSecurityCode] = useState('');
//     const [cardHolderName, setCardHolderName] = useState('');
//     const [country, setCountry] = useState('PE');
//     const [saveCard, setSaveCard] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [errors, setErrors] = useState({
//         cardNumber: '',
//         expiration: '',
//         securityCode: '',
//         cardHolderName: '',
//     });

//     // yape 
//     const [phone, setPhone] = useState('');
//     const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
//     const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
//     const [otpError, setOtpError] = useState(false);

//     const isValidPhone = (phone: string) => /^9\d{8}$/.test(phone);

//     const isOtpComplete = () => otp.every((digit) => digit !== '');


//     const handleYape = async () => {
//         if (!phone || !isValidPhone(phone)) {
//             setStatus({ type: 'error', message: 'Por favor ingresa un número de celular válido.' });
//             return;
//         }

//         if (!isOtpComplete()) {
//             setOtpError(true);
//             setStatus({ type: 'error', message: 'El código de verificación debe tener 6 dígitos.' });
//             return;
//         }

//         if (!(window as any).MercadoPago) {
//             setStatus({ type: 'error', message: 'SDK de Mercado Pago no disponible.' });
//             return;
//         }

//         setLoading(true);

//         const mp = new (window as any).MercadoPago('APP_USR-4cf91e54-9c48-4ae6-8683-48a77da4b8a4', {
//             locale: 'es-PE',
//         });

//         try {
//             const yape = mp.yape({ otp: otp.join(''), phoneNumber: phone });
//             const yapeToken = await yape.create();
//             console.log('✅ Token generado:', yapeToken);

//             const response = await fetch('/api/payment', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     yape_token: yapeToken.id,
//                     amount: 1,
//                     payer_email: 'cd.rojas.dev@gmail.com',
//                 }),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setStatus({ type: 'success', message: 'Pago realizado correctamente' });
//                 console.log('🧾 Resultado:', result);
//             } else {
//                 const errorMsg = result?.error || 'Error desconocido en el pago';
//                 setStatus({ type: 'error', message: errorMsg });
//                 console.error('❌ Error desde backend:', result);
//             }
//         } catch (error) {
//             console.error('❌ Error generando token:', error);
//             setStatus({ type: 'error', message: `Error generando token de Yape: ${error}` });
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!cursoSeleccionado) return router.push('/');

//     const isValidCardNumber = () => /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber);
//     const isValidExpiration = () => {
//         if (!/^\d{2}\/\d{2}$/.test(expiration)) return false;
//         const [monthStr, yearStr] = expiration.split('/');
//         const month = parseInt(monthStr);
//         const year = parseInt('20' + yearStr);
//         const now = new Date();
//         const expDate = new Date(year, month - 1);
//         return month >= 1 && month <= 12 && expDate >= now;
//     };
//     const isValidCVC = () => /^\d{3,4}$/.test(securityCode);
//     const isValidName = () => cardHolderName.trim().split(' ').length >= 2;

//     const validateForm = () => {
//         const newErrors: any = {};

//         const numberOnly = cardNumber.replace(/\s+/g, '');
//         if (!/^\d{16}$/.test(numberOnly)) {
//             newErrors.cardNumber = 'Ingresa un número de tarjeta válido de 16 dígitos';
//         }

//         if (!/^\d{2}\/\d{2}$/.test(expiration)) {
//             newErrors.expiration = 'Formato inválido. Usa MM/AA';
//         } else {
//             const [monthStr, yearStr] = expiration.split('/');
//             const month = parseInt(monthStr);
//             const year = parseInt('20' + yearStr);

//             const now = new Date();
//             const expDate = new Date(year, month - 1);

//             if (month < 1 || month > 12) {
//                 newErrors.expiration = 'Mes inválido. Usa un valor entre 01 y 12';
//             } else if (expDate < now) {
//                 newErrors.expiration = 'La tarjeta está vencida';
//             }
//         }

//         if (!/^\d{3,4}$/.test(securityCode)) {
//             newErrors.securityCode = 'Código de seguridad inválido';
//         }

//         if (cardHolderName.trim().split(' ').length < 2) {
//             newErrors.cardHolderName = 'Ingresa tu nombre completo (nombre y apellido)';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };


//     const getPaymentMethodFromCardNumber = async (bin: string) => {
//         try {
//             const mp = window.MercadoPago;
//             const paymentMethods = await mp.getPaymentMethods({ bin });
//             if (paymentMethods && paymentMethods.length > 0) {
//                 return paymentMethods[0].id; // ej: "visa", "master", "amex", etc.
//             }
//             return null;
//         } catch (error) {
//             console.error('Error al obtener método de pago:', error);
//             return null;
//         }
//     };

//     const handlePayment = async () => {
//         setMessage(null);
//         setError(null);

//         if (!validateForm()) {
//             setError('❌ Por favor, corrige los errores antes de continuar.');
//             return;
//         }

//         setLoading(true);

//         try {
//             const mp = window.MercadoPago;

//             const bin = cardNumber.replace(/\s+/g, '').slice(0, 6);
//             const paymentMethodId = await getPaymentMethodFromCardNumber(bin);

//             if (!paymentMethodId) {
//                 setError('❌ No se pudo identificar la tarjeta.');
//                 setLoading(false);
//                 return;
//             }

//             const tokenResponse = await mp.createCardToken({
//                 cardNumber,
//                 cardholderName: cardHolderName,
//                 securityCode,
//                 identificationType: 'DNI',
//                 identificationNumber: '12345678',
//                 expirationMonth: expiration.split('/')[0],
//                 expirationYear: '20' + expiration.split('/')[1],
//             });

//             if (tokenResponse.error) {
//                 setError('Error al tokenizar tarjeta');
//                 return;
//             }

//             const token = tokenResponse.id;

//             const res = await axios.post('/api/pago', {
//                 token,
//                 transactionAmount: 34.9,
//                 description: 'Curso de ejemplo',
//                 installments: 1,
//                 paymentMethodId, // ← dinámico
//             });

//             if (res.data.status === 'approved') {
//                 setMessage('✅ Pago aprobado');
//             } else {
//                 setError('❌ Pago rechazado');
//             }
//         } catch (err: any) {
//             setError(err?.response?.data?.message || 'Error en el pago');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatCardNumber = (value: string) => {
//         const cleaned = value.replace(/\D+/g, '').slice(0, 16); // Solo números, máx 16 dígitos
//         const groups = cleaned.match(/.{1,4}/g); // Agrupa cada 4
//         return groups ? groups.join(' ') : '';
//     };

//     const precioSinDescuento = descuentos
//         .filter((item) => item.id === cursoSeleccionado.curso_id)
//         .map((item) => item.precio_descuento)[0];
//     const precioConDescuento = cursoSeleccionado.precio;
//     const descuentoAplicado = Math.floor(precioSinDescuento) - Math.floor(Number(precioConDescuento));

//     return (
//         <>
//             <Script
//                 src="https://sdk.mercadopago.com/js/v2"
//                 onLoad={() => {
//                     window.MercadoPago = new window.MercadoPago(process.env.MP_PUBLIC_KEY, {
//                         locale: 'es-PE',
//                     });
//                 }}
//             />

//             {/* Fondo dividido en 50/50 */}
//             <Box
//                 sx={{
//                     display: {
//                         xs: 'block', // vertical en mobile
//                         md: 'flex',  // horizontal desde md en adelante
//                     },
//                     height: '100vh',
//                     width: '100vw',
//                     overflow: 'hidden',
//                 }}
//             >
//                 {/* Lado derecho - Formulario */}
//                 <Box
//                     sx={{
//                         width: {
//                             sm: '100%',
//                             md: '50%'
//                         },
//                         backgroundColor: '#FFFFFF',
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         overflowY: 'auto',
//                         height: {
//                             xs: '100vh',
//                             md: 'auto'
//                         },
//                         pr: {
//                             sm: 0,
//                             md: 2,
//                             lg: 4
//                         },
//                         // La clave: resta la altura estimada del drawer fijo
//                         maxHeight: {
//                             xs: 'calc(100vh - 225px)', // ajuste según el alto real de tu drawer
//                             md: '100%'
//                         },
//                         boxSizing: 'border-box',
//                     }}
//                 >

//                     <Box maxWidth="400px" width="100%" sx={{ background: 'none', boxShadow: 'none', marginTop: isMobile ? '60px' : '80px' }} component={Paper} p={2}>
//                         <Typography variant="h6" sx={{
//                             fontSize: {
//                                 sm: '1rem',
//                                 md: '1.5rem'
//                             }, fontWeight: 'bold',
//                             marginBottom: '20px'
//                         }}>
//                             Pagar
//                         </Typography>
//                         <Typography variant="h6" gutterBottom sx={{ display: isMobile ? 'none' : 'block', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px' }}>
//                             Dirección de facturación
//                         </Typography>
//                         <TextField
//                             select
//                             label="País"
//                             fullWidth
//                             value={country}
//                             onChange={(e) => setCountry(e.target.value)}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <LanguageIcon />
//                                     </InputAdornment>
//                                 ),
//                             }}
//                             InputLabelProps={{ shrink: true }}
//                             sx={{ mb: 3, display: isMobile ? 'none' : 'block' }}
//                         >
//                             <MenuItem value="PE">Perú</MenuItem>
//                             <MenuItem value="AR">Argentina</MenuItem>
//                             <MenuItem value="CL">Chile</MenuItem>
//                         </TextField>

//                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', m: '16px 0px' }}>
//                                 Método de pago
//                             </Typography>

//                             <Box sx={{ textAlign: 'center' }}>
//                                 <Box
//                                     sx={{
//                                         display: 'inline-flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         gap: 1,
//                                         color: 'rgb(110, 110, 110)'
//                                     }}
//                                 >
//                                     <Typography
//                                         variant="h6"
//                                         sx={{
//                                             fontSize: '12px',
//                                             borderBottom: '1px dashed  rgb(143, 143, 143)',
//                                         }}
//                                     >
//                                         Seguro y cifrado
//                                     </Typography>
//                                     <LockIcon sx={{ color: 'black', fontSize: '1.4rem' }} />
//                                 </Box>
//                             </Box>
//                         </Box>

//                         <Button
//                             variant="outlined"
//                             fullWidth
//                             onClick={() => setPaymentYape(prev => !prev)}
//                             sx={{
//                                 display: {
//                                     sm: 'flex',
//                                     md: 'none'
//                                 },
//                                 alignItems: 'center',
//                                 padding: isMobile ? '6px' : '10px',
//                                 justifyContent: 'space-between',
//                                 color: '#6A1B9A',
//                                 borderColor: '#6A1B9A',
//                                 fontWeight: 'bold',
//                                 fontSize: '1rem',
//                                 textTransform: 'none',
//                                 paddingRight: 1.5,
//                                 '&:hover': {
//                                     borderColor: '#4A148C',
//                                 },
//                             }}
//                         >
//                             <Box display="flex" alignItems="center" gap={2}>
//                                 {paymentYape ? (
//                                     <>
//                                         <CreditCardIcon sx={{ fontSize: '1.6rem' }} />

//                                         Pagar con tarjeta
//                                     </>
//                                 ) : (
//                                     <>
//                                         <img
//                                             src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/06/1-yape-logo-transparencia-2.png"
//                                             alt="Yape"
//                                             style={{ width: '32px', height: '32px', objectFit: 'contain' }}
//                                         />
//                                         Yape
//                                     </>
//                                 )}
//                             </Box>

//                             <ChevronRightIcon sx={{ fontSize: '24px', color: '#6A1B9A' }} />
//                         </Button>

//                         {paymentYape ? <YapeFormX
//                             phone={phone}
//                             setPhone={setPhone}
//                             otp={otp}
//                             setOtp={setOtp}
//                             status={status}
//                             setStatus={setStatus}
//                             otpError={otpError}
//                             setOtpError={setOtpError}
//                             isValidPhone={isValidPhone}
//                             isOtpComplete={isOtpComplete}
//                         /> : (<> <Box display="flex" alignItems="center" gap={1} mb={2}>
//                             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Tarjetas</Typography>
//                             <img src="/images/tarjetas.png" alt="Visa" style={{ width: 'fit-content', height: '50px' }} />
//                         </Box>

//                             <TextField
//                                 label="Número de tarjeta"
//                                 placeholder="1234 5678 9012 3456"
//                                 variant="outlined"
//                                 fullWidth
//                                 value={cardNumber}
//                                 onChange={(e) => {
//                                     const value = formatCardNumber(e.target.value);
//                                     setCardNumber(value);

//                                     // Limpiar error si ahora es válido
//                                     if (/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(value)) {
//                                         setErrors(prev => ({ ...prev, cardNumber: '' }));
//                                     }
//                                 }}
//                                 error={!!errors.cardNumber}
//                                 helperText={errors.cardNumber}
//                                 InputLabelProps={{ shrink: true }}
//                                 InputProps={{
//                                     endAdornment: isValidCardNumber() && (
//                                         <InputAdornment position="end">
//                                             <CheckCircleIcon sx={{ color: 'green' }} />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                                 sx={{ mb: 2 }}
//                             />
//                             <Box display="flex" gap={2}>
//                                 <TextField
//                                     label="Fecha de vencimiento"
//                                     placeholder="MM/AA"
//                                     fullWidth
//                                     value={expiration}
//                                     onChange={(e) => {
//                                         const value = e.target.value;
//                                         setExpiration(value);

//                                         if (/^\d{2}\/\d{2}$/.test(value)) {
//                                             setErrors(prev => ({ ...prev, expiration: '' }));
//                                         }
//                                     }}
//                                     error={!!errors.expiration}
//                                     helperText={errors.expiration}
//                                     InputProps={{
//                                         endAdornment: isValidExpiration() && (
//                                             <InputAdornment position="end">
//                                                 <CheckCircleIcon sx={{ color: 'green' }} />
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                     InputLabelProps={{ shrink: true }}
//                                 />
//                                 <TextField
//                                     label="CVC/CVV"
//                                     placeholder="CVC"
//                                     fullWidth
//                                     value={securityCode}
//                                     onChange={(e) => {
//                                         const value = e.target.value;
//                                         setSecurityCode(value);

//                                         if (/^\d{3,4}$/.test(value)) {
//                                             setErrors(prev => ({ ...prev, securityCode: '' }));
//                                         }
//                                     }}
//                                     error={!!errors.securityCode}
//                                     helperText={errors.securityCode}
//                                     InputProps={{
//                                         endAdornment: isValidCVC() && (
//                                             <InputAdornment position="end">
//                                                 <CheckCircleIcon sx={{ color: 'green' }} />
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                     InputLabelProps={{ shrink: true }}
//                                 />
//                             </Box>
//                             <TextField
//                                 label="Nombre en la tarjeta"
//                                 placeholder="Nombre en la tarjeta"
//                                 fullWidth
//                                 sx={{ my: 2 }}
//                                 value={cardHolderName}
//                                 onChange={(e) => {
//                                     const value = e.target.value;
//                                     setCardHolderName(value);

//                                     if (value.trim().split(' ').length >= 2) {
//                                         setErrors(prev => ({ ...prev, cardHolderName: '' }));
//                                     }
//                                 }}
//                                 error={!!errors.cardHolderName}
//                                 helperText={errors.cardHolderName}
//                                 InputProps={{
//                                     endAdornment: isValidName() && (
//                                         <InputAdornment position="end">
//                                             <CheckCircleIcon sx={{ color: 'green' }} />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                                 InputLabelProps={{ shrink: true }}
//                             />

//                             <FormControlLabel
//                                 control={
//                                     <Checkbox checked={saveCard} onChange={() => setSaveCard(!saveCard)} />
//                                 }
//                                 label="Guardar esta tarjeta de forma segura para comprar más adelante"
//                                 sx={{ mt: 2 }}
//                             />    </>)}

//                         <Box sx={{ display: isMobile ? 'none' : 'block', my: 3 }}>
//                             <Divider>O paga con</Divider>
//                         </Box>


//                         <Box

//                             flexDirection="column"
//                             alignItems="flex-start"
//                             justifyContent="flex-start"
//                             sx={{
//                                 gap: 1, display: {
//                                     xs: 'none',
//                                     md: 'flex'
//                                 }
//                             }}
//                         >
//                             <Button
//                                 variant="outlined"
//                                 fullWidth
//                                 onClick={() => setPaymentYape(prev => !prev)}
//                                 sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     padding: '10px',
//                                     justifyContent: 'space-between',
//                                     color: '#6A1B9A',
//                                     borderColor: '#6A1B9A',
//                                     fontWeight: 'bold',
//                                     fontSize: '1rem',
//                                     textTransform: 'none',
//                                     paddingRight: 1.5,
//                                     '&:hover': {
//                                         borderColor: '#4A148C',
//                                         backgroundColor: '#f3e5f5',
//                                     },
//                                 }}
//                             >
//                                 <Box display="flex" alignItems="center" gap={1}>
//                                     {paymentYape ? (
//                                         <>
//                                             <CreditCardIcon sx={{ fontSize: '1.7rem' }} />
//                                             tarjeta
//                                         </>
//                                     ) : (
//                                         <>
//                                             <img
//                                                 src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/06/1-yape-logo-transparencia-2.png"
//                                                 alt="Yape"
//                                                 style={{ width: '32px', height: '32px', objectFit: 'contain' }}
//                                             />
//                                             Yape
//                                         </>
//                                     )}
//                                 </Box>

//                                 <ChevronRightIcon sx={{ fontSize: '24px', color: '#6A1B9A' }} />
//                             </Button>

//                         </Box>


//                         {message && (
//                             <Alert severity="success" sx={{ mt: 2 }}>
//                                 {message}
//                             </Alert>
//                         )}
//                         {error && (
//                             <Alert severity="error" sx={{ mt: 2 }}>
//                                 {error}
//                             </Alert>
//                         )}
//                     </Box>
//                 </Box>
//                 {/* Lado izquierdo - Resumen */}
//                 {/* RESUMEN — Mobile Drawer */}
//                 {!isMobile ? (
//                     <Box
//                         sx={{
//                             width: '50%',
//                             backgroundColor: '#F6F7F9',
//                             display: 'flex',
//                             justifyContent: 'flex-start',
//                             alignItems: '',
//                             pl: {
//                                 sm: 0,
//                                 md: 2,
//                                 lg: 4
//                             },
//                             paddingBottom: '100px'
//                         }}
//                     >
//                         <Box maxWidth="400px" width="100%" sx={{ background: 'none', boxShadow: 'none', marginTop: '126px' }}>
//                             <Paper sx={{ p: 3, background: 'none', boxShadow: 'none' }}>
//                                 <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Resumen del pedido</Typography>
//                                 <Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px', gap: 4 }}>
//                                     <Typography variant="body2" sx={{ fontSize: '14px' }}>Curso:</Typography>
//                                     <Typography variant="body2" sx={{ fontSize: '14px' }}>{cursoSeleccionado.nombre} </Typography>
//                                 </Box>
//                                 <Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px' }}>
//                                     <Typography variant="body2" sx={{ fontSize: '14px' }}>Precio original:</Typography>
//                                     <Typography variant="body2" sx={{ fontSize: '14px' }}>S/ {precioSinDescuento}.00 </Typography>
//                                 </Box>
//                                 <Box display="flex" justifyContent="space-between" sx={{ marginTop: '10px' }}>
//                                     <Typography variant="body2" sx={{ fontSize: '14px' }}>Descuentos:</Typography>
//                                     <Typography variant="body2" color="green" sx={{ fontSize: '14px' }}>
//                                         S/ -{descuentoAplicado}.00
//                                     </Typography>
//                                 </Box>
//                                 <Divider sx={{ my: 1 }} />
//                                 <Box display="flex" justifyContent="space-between">
//                                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '16px' }}>Total (1 curso):</Typography>
//                                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '16px' }}>S/ {precioConDescuento}.00 </Typography>
//                                 </Box>

//                                 <Button
//                                     fullWidth
//                                     variant="contained"
//                                     size="large"
//                                     onClick={paymentYape ? handleYape : handlePayment}
//                                     disabled={loading}
//                                     startIcon={<LockIcon sx={{ color: 'white' }} />}
//                                     sx={{ mt: 8, color: 'white', fontWeight: 'bold' }}
//                                 >
//                                     {loading ? <CircularProgress size={24} /> : `Pagar S/ ${precioConDescuento}.00  `}
//                                 </Button>
//                             </Paper>

//                             <Paper sx={{ p: 3, mt: 2 }}>
//                                 <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Empieza a mejorar tu futuro hoy mismo</Typography>
//                                 <Typography variant="body2">
//                                     Garantías de la mejor preparación a nivel profesional.
//                                 </Typography>
//                             </Paper>
//                         </Box>
//                     </Box>
//                 ) : (
//                     <Box
//                         sx={{
//                             position: 'fixed',
//                             bottom: 0,
//                             left: 0,
//                             width: '100%',
//                             zIndex: 2000,
//                             backgroundColor: '#fff',
//                             boxShadow: '0px -4px 16px rgba(0,0,0,0.1)',
//                             p: 2,
//                             borderTopLeftRadius: 16,
//                             borderTopRightRadius: 16,
//                         }}
//                     >
//                         <Box>
//                             <Box display="flex" justifyContent="space-between">
//                                 <Typography fontWeight="bold" sx={{ fontSize: '1rem' }}>Total:</Typography>
//                                 <Typography fontWeight="bold" sx={{ fontSize: '1rem' }}>S/ {precioConDescuento}.00</Typography>
//                             </Box>
//                             <Button
//                                 fullWidth
//                                 variant="contained"
//                                 size="large"
//                                 onClick={paymentYape ? handleYape : handlePayment}
//                                 disabled={loading}
//                                 startIcon={<LockIcon sx={{ color: 'white' }} />}
//                                 sx={{ mt: 2, color: 'white', fontWeight: 'bold', fontSize: '1rem' }}
//                             >
//                                 {loading ? <CircularProgress size={24} /> : `Pagar S/ ${precioConDescuento}.00`}
//                             </Button>

//                             <Divider sx={{ my: 1 }} />

//                             <Typography variant="subtitle1" fontWeight="bold">Resumen del pedido</Typography>
//                             <Box display="flex" justifyContent="space-between" mt={1}>
//                                 <Typography variant="body2">Curso:</Typography>
//                                 <Typography variant="body2">{cursoSeleccionado.nombre}</Typography>
//                             </Box>
//                             <Box display="flex" justifyContent="space-between">
//                                 <Typography variant="body2">Precio original:</Typography>
//                                 <Typography variant="body2">S/ {precioSinDescuento}.00</Typography>
//                             </Box>
//                             <Box display="flex" justifyContent="space-between">
//                                 <Typography variant="body2">Descuento:</Typography>
//                                 <Typography variant="body2" color="green">S/ -{descuentoAplicado}.00</Typography>
//                             </Box>

//                         </Box>
//                     </Box>
//                 )}
//             </Box>
//         </>
//     );
// };

// export default CardForm;
