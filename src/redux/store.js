import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import loggingMiddleware from "./logginMiddleware";
import { api } from "./createApi.demo";

export const store = configureStore({
    reducer: {
        products: productSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggingMiddleware, api.middleware]
})