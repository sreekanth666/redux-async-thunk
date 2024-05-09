import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/",
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"

        }),
        getProductById: builder.query({
            query: (productId) => `products/${productId}`,
            keepUnusedDataFor: 60
        })
    }),
    tagTypes: ["Products"],
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = api