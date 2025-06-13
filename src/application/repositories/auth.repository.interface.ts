export interface AuthApiPort {
    login(username: string, password: string): Promise<{ token: string }>;
    sendMailObtainCode(code: string): Promise<any>;
    validateCode(user_code: string, code: string): Promise<any>;
    resetPassword(user_code: string, new_password: string, verification_code: string): Promise<any>;
  }
  