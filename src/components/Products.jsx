import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/productThunk'
import { useAddProductMutation } from '../redux/createApi.demo'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector((state) => state.products.products)
    const status = useSelector((state) => state.products.status)

    const fetchProducts = () => {
        addProduct({
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        })
    }

    const [addProduct, {isLoading, isError, error, isSuccess}] = useAddProductMutation()
    console.log("IS SUCCESS: ", isSuccess);


    return (
        <div className='container my-5'>
            <h1>React Redux createAPI()</h1>
            <h3>Product component (Parent)</h3>
            <button onClick={() => navigate("/fetchProducts")} className='btn btn-danger m-3'>Go to child</button>
            <button onClick={fetchProducts} className='btn btn-primary m-3'>Fetch Products</button>
        </div>
    )
}
