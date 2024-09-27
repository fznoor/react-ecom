import React from 'react'
import ProductList from '../component/ProductList'
import { fetchProduct } from '../redux/product/product_action'
import { useSelector } from 'react-redux'

function Home() {
    const { product } = useSelector(state => state.productReducer)

    return (
        <>
            <ProductList
                fetchProduct={fetchProduct}
                product={product}
            />
        </>
    )
}

export default Home