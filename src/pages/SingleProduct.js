import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchSingleProduct } from '../redux/product/product_action'

function SingleProduct() {
    const [quantity, setQuantity] = useState(1)

    let { routeId } = useParams()

    let { singleProduct } = useSelector(state => state.productReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleProduct(`https://fakestoreapi.com/products/${routeId}
        `))

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
                        <button className="addToCart" onClick={() => dispatch(addToCart(id, image, price, title, description, quantity))}>Add to cart</button>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct