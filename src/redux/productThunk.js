import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productThunk = createAsyncThunk(
    "fetch/products",
    async (productId) => {
        try {
            const result = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            return result.data
        } catch (error) {
            throw error
        }
    },
    {
        condition: (_, { getState }) => {
            const { status } = getState().products
            if (status === "loading") {
                return false; // Don't refetch if already loading
            }
        }
    }
)
