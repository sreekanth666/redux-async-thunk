import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import { api } from "./createApi.demo";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware]
})