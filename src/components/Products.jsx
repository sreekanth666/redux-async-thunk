import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/productThunk'

export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
    const error = useSelector((state) => state.products.error)
    const status = useSelector((state) => state.products.status)

    const fetchProducts = () => {
        dispatch(productThunk(10));
    }

    console.log(products);
    // console.log(error);
    // console.log(status);
    return (
        <div>
            <button onClick={fetchProducts}>Click</button>
        </div>
    )
}