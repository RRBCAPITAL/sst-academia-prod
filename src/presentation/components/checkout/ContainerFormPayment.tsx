import { Box, Button, Typography, Paper, Stepper, Step, StepLabel } from "@mui/material"
import YapeFormX from "./YapeFormX";
import LockIcon from '@mui/icons-material/Lock';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { IFormYapeX } from "./interfaces/form-yape.interface";
import { IFormCardX } from "./interfaces/form-card.interface";
import CardBrick from "./Card-brick";
import CustomStepIcon from "../ui/CustomStepIcon";

interface ContainerFormPaymentProps {
    isMobile: any;
    country?: string;
    setCountry?: (value: string) => void;
    paymentYape: boolean;
    setPaymentYape: (payment: boolean) => void;
    message?: string | null;
    error?: string | null;
    FormYapeX: IFormYapeX;
    FormCardX: IFormCardX,
    cardBrickRef: any;
    brickReady: boolean;
    setBrickReady: (brickReady: boolean) => void;
    loading: boolean;
    onLoadingChange: (loading: boolean) => void;
    onRegistrationComplete: () => void,
    activeStep: number,
    steps: string[]
}
const ContainerFormPayment = (props: ContainerFormPaymentProps) => {
    const { activeStep, steps, isMobile, paymentYape, setPaymentYape, brickReady, setBrickReady, cardBrickRef, onLoadingChange, loading } = props;
    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    md: '50%'
                },
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: {
                    xs: 'center',
                    sm: 'flex-end'
                },
                overflowY: 'auto',
                height: {
                    xs: '100vh',
                    md: 'auto'
                },
                pr: {
                    xs: 0,
                    md: 2,
                    lg: 4
                },
                // La clave: resta la altura estimada del drawer fijo
                maxHeight: {
                    xs: 'calc(100vh - 225px)', // ajuste según el alto real de tu drawer
                    sm: '100%'
                },
                boxSizing: 'border-box',
            }}
        >
            <Box maxWidth="400px" width="100%" sx={{ background: 'none', boxShadow: 'none', marginTop: isMobile ? '60px' : '80px' }} component={Paper} p={2}>
            <Stepper activeStep={activeStep} alternativeLabel >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  sx={{
                    '& .MuiStepIcon-root': {
                      position: 'relative',
                      // Oculta el icono interno duplicado que no tiene número
                      '& svg': { display: 'none' },
                    },
                    '& .MuiStepLabel-label': {
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
                {/* <Typography variant="h6" sx={{
                    fontSize: {
                        sm: '1rem',
                        md: '1.5rem'
                    }, fontWeight: 'bold',
                    marginBottom: '20px'
                }}>
                    Pagar
                </Typography> */}

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginTop: '50px', marginBottom: '16px' }}>
                        Método de pago
                    </Typography>

                    <Box sx={{ textAlign: 'center', marginTop: '50px', marginBottom: '16px' }}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                color: 'rgb(110, 110, 110)'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '12px',
                                    borderBottom: '1px dashed  rgb(143, 143, 143)',
                                }}
                            >
                                Seguro y cifrado
                            </Typography>
                            <LockIcon sx={{ color: 'black', fontSize: '1.4rem' }} />
                        </Box>
                    </Box>
                </Box>
                <Box

                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    sx={{
                        gap: 1, display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        marginTop: '20px',
                    }}
                >
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => setPaymentYape(!paymentYape)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            justifyContent: 'space-between',
                            color: '#6A1B9A',
                            borderColor: '#6A1B9A',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            textTransform: 'none',
                            paddingRight: 1.5,
                            '&:hover': {
                                borderColor: '#4A148C',
                                backgroundColor: '#f3e5f5',
                            },
                        }}
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            {paymentYape ? (
                                <>
                                    <CreditCardIcon sx={{ fontSize: '1.7rem' }} />
                                    tarjeta
                                </>
                            ) : (
                                <>
                                    <img
                                        src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/06/1-yape-logo-transparencia-2.png"
                                        alt="Yape"
                                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                                    />
                                    Yape
                                </>
                            )}
                        </Box>

                        <ChevronRightIcon sx={{ fontSize: '24px', color: '#6A1B9A' }} />
                    </Button>

                </Box>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setPaymentYape(!paymentYape)}
                    sx={{
                        display: {
                            sm: 'flex',
                            md: 'none'
                        },
                        alignItems: 'center',
                        padding: isMobile ? '6px' : '10px',
                        justifyContent: 'space-between',
                        color: '#6A1B9A',
                        border: '0.5px solid #6A1B9A',
                        fontWeight: '400',
                        fontSize: '1rem',
                        textTransform: 'none',
                        paddingRight: 1.5,
                        '&:hover': {
                            borderColor: '#4A148C',
                        },
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        {paymentYape ? (
                            <>
                                <CreditCardIcon sx={{ fontSize: '1.6rem' }} />
                                Pagar con tarjeta
                            </>
                        ) : (
                            <>
                                <img
                                    src="https://marketing-peru.beglobal.biz/wp-content/uploads/2024/06/1-yape-logo-transparencia-2.png"
                                    alt="Yape"
                                    style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                                />
                                Yape
                            </>
                        )}
                    </Box>

                    <ChevronRightIcon sx={{ fontSize: '24px', color: '#6A1B9A' }} />
                </Button>
                <Typography
                    variant="body2"
                    sx={{ mt: 1, color: '#555', fontStyle: 'italic', textAlign: 'center', fontSize: '0.7rem' }}
                >
                    🔒 Pago 100% seguro, protegido por <strong>Mercado Pago</strong>
                </Typography>
                {paymentYape ?
                    <YapeFormX
                        FormYapeX={props.FormYapeX}
                    /> :
                    <CardBrick
                        ref={cardBrickRef}
                        brickReady={brickReady}
                        setBrickReady={setBrickReady}
                        onLoadingChange={onLoadingChange}
                        loading={loading}
                        status={props.FormYapeX.status}
                        setStatus={props.FormYapeX.setStatus}
                    />
                }
            </Box>
        </Box>
    );
}
export default ContainerFormPayment;