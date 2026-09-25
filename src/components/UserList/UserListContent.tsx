import type { User } from '../../types/user';

interface UserListContentProps {
  users?: User[];
  isLoading: boolean;
  error: string | null;
  onUserClick: (id: number) => void;
}

export function UserListContent({ users, isLoading, error, onUserClick }: UserListContentProps) {
  if (isLoading) return <div className="text-custom-text">Loading users...</div>;

  if (error) return <div className="text-red-500 font-bold">{error}</div>;

  if (!users || users.length === 0) return <div className="text-custom-text">No users found.</div>;

  return (
    <ul className="divide-y divide-custom-border border border-custom-border rounded-md max-w-md mx-auto bg-custom-bg">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => onUserClick(user.id)}
          className="p-4 cursor-pointer hover:bg-custom-accent-bg text-custom-text-h transition-colors text-left"
          role="listitem"
        >
          <p className="font-sans font-medium">{user.name}</p>
          {user.email && <p className="text-sm font-mono text-custom-text">{user.email}</p>}
        </li>
      ))}
    </ul>
  );
}
