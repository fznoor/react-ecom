import React from 'react'
import ProductList from '../component/ProductList'
import { useGlobalContext } from '../context/context'

function Home() {
    const { product, getProduct } = useGlobalContext()

    return (
        <>
            <ProductList
                getProduct={getProduct}
                product={product}
            />
        </>
    )
}

export default Home