import { fetchUsers } from '../api/users';
import { useQuery } from '@tanstack/react-query';
import type { BaseHookReturn } from '../types/hook-return-values';
import type { User } from '../types/user';

export function useUsers(): BaseHookReturn<User> {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}
