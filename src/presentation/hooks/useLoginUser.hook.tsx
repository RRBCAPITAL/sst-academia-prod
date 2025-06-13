// src/hooks/useLoginUser.ts
import { useMutation } from '@tanstack/react-query';
import { fetchLoginUser } from '../queries/fetchLoginUser';

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: fetchLoginUser,
  });
};