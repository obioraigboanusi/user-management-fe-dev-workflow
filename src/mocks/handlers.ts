import { delay, http, HttpResponse } from 'msw';
import { mockUsers } from './users';
import type { User } from '../types/user';

export const handlers = [
  http.get(`/api/users`, () => HttpResponse.json(mockUsers, { status: 200 })),
  http.post(`/api/users`, async ({ request }) => {
    const newUser = (await request.json()) as unknown as User;

    await delay(1);

    return HttpResponse.json(
      {
        ...newUser,
        id: Date.now(),
      },
      { status: 201 },
    );
  }),
];
