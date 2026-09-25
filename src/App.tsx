import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-center mb-4 text-custom-text">
          User Management App
        </h1>
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
