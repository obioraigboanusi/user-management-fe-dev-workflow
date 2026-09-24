import { http, HttpResponse } from 'msw';

interface User {
  id: number;
  name: string;
}

export const handlers = [
  http.get('/api/users', () => {
    const users: User[] = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    return HttpResponse.json(users, { status: 200 });
  }),
];
