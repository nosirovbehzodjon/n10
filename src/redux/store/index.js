import { configureStore } from "@reduxjs/toolkit";
import { api } from "../reducer/async/news";
import counterSlice from "../reducer/static/counter";
import todoSlice from "../reducer/static/todos";

//reducers

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
