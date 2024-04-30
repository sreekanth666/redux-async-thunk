import { createSlice } from "@reduxjs/toolkit";
import { productThunk } from "./productThunk";


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        productById: {},
        status: "idle",
        error: null,
        count:0
    },
    reducers: {
        increment(state) {
            state.count += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(productThunk.pending, (state) => {
                state.status = "loading"
            })
            .addCase(productThunk.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.products = action.payload
            })
            .addCase(productThunk.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
    }
})

export const { increment } = productSlice.actions
export default productSlice.reducer