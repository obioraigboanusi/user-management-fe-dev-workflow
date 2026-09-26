import { render, screen, fireEvent } from '@testing-library/react';
import { UserListContent } from '../UserListContent';
import { mockUsers } from '../../../mocks/users';

describe('UserListContent UI Component', () => {
  it('renders a loading message when isLoading is true', () => {
    render(<UserListContent users={[]} isLoading={true} error={null} onUserClick={vi.fn()} />);

    expect(screen.getByText(/loading users.../i)).toBeInTheDocument();
  });

  it('renders an error alert panel when an error string is provided', () => {
    const errorMessage = 'Failed to fetch users: 500 Internal Server Error';

    render(
      <UserListContent users={[]} isLoading={false} error={errorMessage} onUserClick={vi.fn()} />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders a fallback info view when the user array is completely empty', () => {
    render(<UserListContent users={[]} isLoading={false} error={null} onUserClick={vi.fn()} />);

    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
  });

  it('renders a list of users accurately matching data arrays', () => {
    render(
      <UserListContent users={mockUsers} isLoading={false} error={null} onUserClick={vi.fn()} />,
    );

    // Verify typography content maps onto DOM nodes smoothly
    mockUsers.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });

  it('triggers the onUserClick event handling callback with the correct id parameter', () => {
    const mockUserClickCallback = vi.fn();

    render(
      <UserListContent
        users={mockUsers}
        isLoading={false}
        error={null}
        onUserClick={mockUserClickCallback}
      />,
    );
    const firstUserData = mockUsers[0];

    // Select and click the node carrying the name text
    const firstUserItem = screen.getByText(firstUserData.name);
    fireEvent.click(firstUserItem);

    // Assert that the mock spy was hit with the exact user id parameter
    expect(mockUserClickCallback).toHaveBeenCalledTimes(1);
    expect(mockUserClickCallback).toHaveBeenCalledWith(1);
  });
});
