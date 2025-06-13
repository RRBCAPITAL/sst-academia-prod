'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import apiClient from '@/src/infrastructure/http/AxiosHttpClient';
import { auth } from '@/src/infrastructure/auth/firebase/firebase-client';

export type UserType = {
  uid: string;
  user_id: string;
  nombres: string;
  apellidos: string;
  correo: string;
  fotoPerfil?: string | null;
};

const fetchUser = async (): Promise<UserType | null> => {
  try {
    const res = await apiClient.get('/auth/me');
    return res.data.user;
  } catch {
    return null; // Si no hay sesión, devolvemos null
  }
};

export function useUser() {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading: loading,
    error,
    refetch,
  } = useQuery<UserType | null>({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });

  const logout = async () => {
    try {
      await signOut(auth); // Firebase
      await apiClient.post('/auth/logout'); // Tu API
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      queryClient.removeQueries({ queryKey: ['user'] });
      if (typeof window !== 'undefined') {
        window.location.href = "/";
      }
    }
  };

  return {
    user,
    loading,
    error,
    logout,
    refetchUser: refetch, // puedes usar esto después de login
  };
}
