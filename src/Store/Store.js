import { configureStore } from "@reduxjs/toolkit";
import  todoSlice from "../Reducer/ToDoSlice";
export const store= configureStore({
 reducer: todoSlice
})