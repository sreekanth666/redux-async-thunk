import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/productThunk'
import { useGetAllProductsQuery, useGetProductByIdQuery } from '../redux/createApi.demo'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector((state) => state.products.products)
    // const error = useSelector((state) => state.products.error)
    // const error = useSelector((state) => state.products.error)
    const status = useSelector((state) => state.products.status)

    const fetchProducts = () => {
        dispatch(productThunk(10));
    }

    const { data, isLoading, refetch, isFetching, error, isError, isSuccess } = useGetProductByIdQuery(10)
    console.log("Data from parent: ", data);
    console.log("Fetching from parent: ", isFetching);

    // console.log(products);
    // console.log(error);
    // console.log(status);
    return (
        <div className='container my-5'>
            <h1>React Redux createAPI()</h1>
            <h3>Product component (Parent)</h3>
            <button onClick={() => navigate("/fetchProducts")} className='btn btn-danger m-3'>Go to child</button>
            <button onClick={fetchProducts} className='btn btn-primary m-3'>Fetch Products</button>
        </div>
    )
}
