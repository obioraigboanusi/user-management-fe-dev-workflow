import type { User } from '../types/user';
import { apiClient } from './client';

export async function fetchUsers(): Promise<User[]> {
  return apiClient.get('/api/users');
}
export async function createUser(payload: Omit<User, 'id'>): Promise<User> {
  return apiClient.post('/api/users', payload);
}
