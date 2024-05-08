import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// The error was in the import. The issue was resolved when I corrected the path from @reduxjs/toolkit/query to @reduxjs/toolkit/query/react
// In this case we are exporting hooks which is exclusive to React functional component, so we need to import it from @reduxjs/toolkit/query/react
// If we just import from @reduxjs/toolkit/query, we are only importing the core functionality, in react functional component we need to import functionalities built for React functional components

export const api = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
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
    tagTypes: ["Products"]
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = api