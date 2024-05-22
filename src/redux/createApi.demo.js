import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// Gateway
const gateway = async (args, options) => {
    console.log(args);
    const response = await axios({
        url: "https://fakestoreapi.com/" + args.url,
        method: args.method,
        headers: {
            "Content-Type": "application/json"
        },
        data: args.body
    })
    return response
}

export const api = createApi({
    reducerPath: "products",
    baseQuery: async (args, api) => {
        // console.log(api);
        // common token
        return gateway(args)
    },
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: "products",
                method: "GET",
            }),
            providesTags: ["Products"],
        }),
        addProduct: builder.mutation({
            query: (reqBody) => ({
                url: `products`,
                method: "POST",
                body: reqBody,
                // specific token
            }),
            invalidatesTags: ["Products"],
        })
    })
})

export const { useGetAllProductsQuery, useAddProductMutation } = api