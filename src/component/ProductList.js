import React, { memo, useEffect } from 'react'
import './ProductList.scss'
import { NavLink } from 'react-router-dom'

function ProductList({ product, getProduct }) {

    useEffect(() => {
        getProduct('https://fakestoreapi.com/products')
    }, [])

    return (
        <>
            <span className='productTitle'>
                <p>PRODUCTS</p>
                <h2>MOST POPULAR PRODUCTS</h2>
            </span>
            <div className='productListContainer'>
                {product.map((curElem) => {
                    const { id, image, title, category, price } = curElem
                    let newTitle = title.substring(0, 50)
                    return (
                        <NavLink to={`/products/${id}`} key={id}
                            style={{ textDecoration: 'none', color: '#000' }}>
                            <div className="productList">
                                <img src={image} alt='Image' loading='lazy' />
                                <p>{category}</p>
                                <p>{newTitle.length > 49 ? `${newTitle}...` : newTitle}</p>
                                <p>${price}</p>
                            </div>
                        </NavLink>
                    )
                })}
            </div >
        </>
    )
}

export default memo(ProductList)