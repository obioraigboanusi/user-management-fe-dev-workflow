import { useUsers } from '../../hooks/useUsers';
import { UserListContent } from './UserListContent';

export default function UserList() {
  const { data: users, isLoading, error } = useUsers();

  const handleUserClick = (id: number) => {
    console.log(`User with ID ${id} clicked`);
  };
  return (
    <UserListContent
      users={users}
      isLoading={isLoading}
      error={error}
      onUserClick={handleUserClick}
    />
  );
}
