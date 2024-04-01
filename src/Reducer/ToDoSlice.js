import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoState:[]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                text: action.payload.text,
                isComplete: false
            }
            state.todoState.push(newTodo);

        },
        completeTodo: (state, action) => {
            const todoId = action.payload;
            const todoToUpdate = state.todoState.find(todo => todo.id === todoId);
            if (todoToUpdate) {
                todoToUpdate.isComplete = true;
            }
        }
        ,

        deleteTodo:(state,action)=>{
            state.todoState=state.todoState.filter(todo=>{todo.id!==action.payload})
        }
    }
})

export const {addTodo,deleteTodo,completeTodo}=todoSlice.actions

export default  todoSlice.reducer;