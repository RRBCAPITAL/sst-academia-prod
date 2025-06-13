// src/queries/fetchLoginUser.ts
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import axios from 'axios';
import { loginWithGoogle } from '../hooks/useGoogleLogin.hook';

export const fetchLoginUser = async () => {
  try {
    const idToken = await loginWithGoogle();

    const res = await apiClient.post('/auth/login', null, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Ocurrió un error inesperado';
      throw new Error(message);
    } else {
      throw new Error('Error desconocido al iniciar sesión');
    }
  }
};
