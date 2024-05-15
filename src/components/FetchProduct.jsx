import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/productThunk'
import { useGetProductByIdQuery } from '../redux/createApi.demo'

export default function FetchProducts() {
    const dispatch = useDispatch()

    const fetchProducts = () => {
        dispatch(productThunk(10));
    }

    const { data, isLoading, refetch, isFetching, error, isError, isSuccess } = useGetProductByIdQuery(10)
    console.log("Data from child: ", data);
    console.log("Fetching from child: ", isFetching);

    return (
        <div className='container my-5'>
            <h3>Fetch product component (Child)</h3>
        </div>
    )
}
