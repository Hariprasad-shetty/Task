import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 text-center">
        Task Manager
      </h1>
      <TaskForm />
      <Filters filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
}

export default App;
