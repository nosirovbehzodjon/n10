import { createSlice } from "@reduxjs/toolkit";
import { getData, setData } from "../../../../service/storage";

const state = {
    todos: getData("todo") ?? [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState: state,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.todos.push(action.payload);
            setData("todo", state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (item) => item.id !== action.payload.id
            );
            setData("todo", state.todos);
        },
        editTodo: (state, action) => {
            console.log(action.payload);
            state.todos = state.todos.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            setData("todo", state.todos);
        },
    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
