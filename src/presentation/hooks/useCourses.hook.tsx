import { useQuery } from '@tanstack/react-query'
import apiClient from '@/src/infrastructure/http/AxiosHttpClient'
import axios from 'axios';
import { CursoDTO } from '@/src/application/dto/get-all-courses-public.dto';

const fetchCourses = async (): Promise<CursoDTO[]> => {
  try {
    const res = await apiClient.get('/all-courses-details');
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Ocurrió un error inesperado'
        throw new Error(message);
      } else {
        throw new Error('Error desconocido al obtener los cursos')
      }
  }
}

export const useCourses = () => {
  return useQuery<CursoDTO[], Error>({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 5,           // 5 minutos
    // cacheTime: 1000 * 60 * 10,          // 10 minutos de retención en caché
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 1,
    gcTime: 1000 * 60 * 10,
  });
  
}
