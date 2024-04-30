import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import loggingMiddleware from "./logginMiddleware";

export const store = configureStore({
    reducer: {
        products: productSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggingMiddleware]
})