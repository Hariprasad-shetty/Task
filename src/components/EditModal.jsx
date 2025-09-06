import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/tasksSlice";

function EditModal({ task, onClose }) {
  const dispatch = useDispatch();
  const [text, setText] = useState(task.text);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    if (text.trim() === "") return;
    dispatch(editTask({ id: task.id, text, status }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-4"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full sm:w-auto p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
