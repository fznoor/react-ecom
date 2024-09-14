import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import './SingleProduct.scss'

function SingleProduct() {
    const [quantity, setQuantity] = useState(1)

    let { routeId } = useParams()
    let { singleProduct, getSingleProduct, addToCart } = useGlobalContext()

    useEffect(() => {
        getSingleProduct(`https://fakestoreapi.com/products/${routeId}
        `)
    }, [routeId])

    const {
        id,
        image,
        price,
        title,
        description,
    } = singleProduct

    return (
        <>
            <div className="singleProductContainer">
                <div className='singleProduct'>
                    <img src={image} alt={title} />
                    <div className="details">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button className="decrement" onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}>-</button>
                        <input value={quantity} />
                        <button className="increment" onClick={() => setQuantity(quantity + 1)}>+</button>
                        <button className="addToCart" onClick={() => addToCart(id, image, price, title, description, quantity)}>Add to cart</button>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct