import { useDispatch } from "react-redux";
import { deleteTask } from "../store/tasksSlice";
import { useState } from "react";
import EditModal from "./EditModal";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const statusColor = {
    "Pending": "bg-yellow-200 text-yellow-800",
    "In Progress": "bg-blue-200 text-blue-800",
    "Completed": "bg-green-200 text-green-800",
  };

  return (
    <>
      {editing && <EditModal task={task} onClose={() => setEditing(false)} />}
      <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-3 rounded-lg shadow w-full break-words">
        
        {/* Task text container */}
        <div className="flex-1 min-w-0 w-full">
          <span
            onClick={() => setEditing(true)}
            className="cursor-pointer font-medium break-words w-full"
          >
            {task.text}
          </span>
        </div>

        {/* Status & Delete buttons */}
        <div className="flex items-center mt-2 sm:mt-0 gap-3 flex-shrink-0 flex-wrap sm:flex-nowrap">
          <span
            className={`inline-block px-2 py-0.5 rounded text-sm ${statusColor[task.status]}`}
          >
            {task.status}
          </span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>

      </li>
    </>
  );
}

export default TaskItem;
