import { http, HttpResponse } from 'msw';
import { mockUsers } from './users';

export const handlers = [
  http.get(`/api/users`, () => HttpResponse.json(mockUsers, { status: 200 })),
];
