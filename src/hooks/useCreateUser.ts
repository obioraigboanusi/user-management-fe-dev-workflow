import { useMutation } from '@tanstack/react-query';
import { createUser } from '../api/users';
import { queryClient } from '../lib/queryClient';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
