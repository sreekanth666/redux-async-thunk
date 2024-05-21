import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const customFetch = async(data, options) => {
    // Gateway

    console.log(options);
    console.log(data.url);
    const response = await axios({
        url: data.url,
        method: data.method,
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(response);
    return response.data
}

export const api = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/",
        fetchFn: customFetch,
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        getProductById: builder.query({
            query: (productId) => `products/${productId}`,
            keepUnusedDataFor: 60
        })
    })
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = api