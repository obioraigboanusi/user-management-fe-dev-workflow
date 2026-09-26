import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';

export const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: 'users/new', Component: AddUser },
]);
