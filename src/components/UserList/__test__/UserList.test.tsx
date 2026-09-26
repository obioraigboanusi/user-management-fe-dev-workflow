import { render, screen } from '@testing-library/react';
import UserList from '../UserList';
import { mockUsers } from '../../../mocks/users';
import { createQueryWrapper } from '../../../test/createQueryWrapper';

test('Renders a list of users fetched from api', async () => {
  render(<UserList />, {
    wrapper: createQueryWrapper(),
  });

  expect(await screen.findByText(mockUsers[0].name)).toBeInTheDocument(); // NB: screen.findByText returns a promise
});
