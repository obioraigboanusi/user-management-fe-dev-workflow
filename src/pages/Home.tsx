import { Link } from 'react-router-dom';
import UserList from '../components/UserList/UserList';

function Home() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-custom-text">Users</h1>

        <Link
          to="/users/new"
          className="rounded-md bg-blue-600 hover:bg-blue-600/70 text-white px-3 py-2 text-sm"
        >
          Add User
        </Link>
      </div>
      <UserList />
    </div>
  );
}

export default Home;
