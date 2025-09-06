import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList({ filter }) {
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  if (filteredTasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks found</p>;
  }

  return (
    <ul className="w-full max-w-md space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
