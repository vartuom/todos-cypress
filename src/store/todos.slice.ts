import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import { ITodoItem } from "../types/types";

interface IInitialState {
    todos: ITodoItem[];
}

const initialState: IInitialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                text: action.payload,
                uuid: uuidv4(),
                isDone: false
            });
        },
        toggleTodo(state, action) {
            const index = state.todos.findIndex((todo) => todo.uuid === action.payload)
            state.todos[index].isDone = !state.todos[index].isDone
        },
        removeTodo(state, action) {
            // state.todos = state.todos.filter(todo => todo.uuid !== action.payload.uuid);
            state.todos = state.todos.filter(todo => todo.uuid !== action.payload);
        },
        dropComplited(state) {
            state.todos = state.todos.filter(todo => !todo.isDone);
        }
    },
});
export const { addTodo, removeTodo, toggleTodo, dropComplited } = todosSlice.actions;
export default todosSlice.reducer;