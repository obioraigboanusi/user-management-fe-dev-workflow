import AddUserForm from '../components/AddUser/AddUserForm';

export default function AddUser() {
  return (
    <div className="mt-10 rounded-xl border border-slate-100 p-8 shadow-sm transition-colors duration-200 dark:border-slate-800">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Add New User
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Create a profile for a new user in the system.
        </p>
      </div>

      <AddUserForm />
    </div>
  );
}
