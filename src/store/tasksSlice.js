import { createSlice } from "@reduxjs/toolkit";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: savedTasks,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { id, text, status } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.text = text;
        task.status = status;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    setTasks: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
