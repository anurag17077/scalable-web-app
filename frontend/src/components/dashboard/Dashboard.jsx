import { useAuth } from "../../context/AuthContext";
import TaskManager from "./TaskManager";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">Manage your tasks efficiently</p>
      </div>
      <TaskManager />
    </div>
  );
};

export default Dashboard;
