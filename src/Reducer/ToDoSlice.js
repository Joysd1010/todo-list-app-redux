import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoState: JSON.parse(localStorage.getItem("todos")) || [],
};

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        text: action.payload.text,
        isComplete: false,
      };
      state.todoState.push(newTodo);
      updateLocalStorage(state.todoState);
    },
    completeTodo: (state, action) => {
      const todoId = action.payload;
      const todoToUpdate = state.todoState.find((todo) => todo.id === todoId);
      if (todoToUpdate) {
        todoToUpdate.isComplete = true;
        updateLocalStorage(state.todoState);
      }
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todoState = state.todoState.filter((todo) => todo.id !== todoId);
      updateLocalStorage(state.todoState);
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
