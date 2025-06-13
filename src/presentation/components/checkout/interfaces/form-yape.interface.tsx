export interface IFormYapeX {
    phone: string,
    setPhone: (phone: string) => void,
    otp: string[],
    setOtp: (otp: string[]) => void,
    status: { type: 'success' | 'error'; message: string } | null,
    setStatus: (status: { type: 'success' | 'error'; message: string } | null) => void,
    otpError: boolean,
    setOtpError: (otpError: boolean) => void,
    isValidPhone: (phone: string) => boolean,
    isOtpComplete: () => void
}