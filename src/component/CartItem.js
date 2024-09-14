import React, { memo, useEffect } from 'react'
import './CartItem.scss'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft, FaTrash } from 'react-icons/fa6'

function CartItem({ cart, setDecrement, setIncrement, removeCart, dispatch, sub_total, shipping_fee }) {
    useEffect(() => {
        dispatch({ type: 'SET_TOTAL_PRICE' })
    }, [cart])

    return (
        <>
            <div className='cart'>
                <h1>Shopping Cart</h1>
                <div className="cartNamings">
                    <p>Item</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>

                {cart.map((curElem) => {
                    const { image, name, price, quantity, id } = curElem
                    return (
                        <>
                            <div className="cartItem">
                                <img src={image} alt={name} />
                                <span>
                                    <button onClick={() => setDecrement(id)}>-</button>
                                    <input value={quantity} />
                                    <button onClick={() => setIncrement(id)}>+</button>
                                </span>
                                <p>${price * quantity}</p>
                                <button className='removeBtn' onClick={() => removeCart(id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </>
                    )
                })}

                {cart.length < 1 && <h2>Cart is empty</h2>}
                <NavLink to='/'
                    style={{ textDecoration: 'none', color: 'rgb(118, 108, 255)' }}>
                    <FaArrowLeft />Continue Shopping
                </NavLink>

                {cart.length >= 1 ? <div className="totalDetails">
                    <span>Subtotal:</span>
                    <p>${sub_total}</p>
                    <span>Shipping Fee:</span>
                    <p> ${shipping_fee}</p>
                    <span>Total Order:</span>
                    <p> ${sub_total + shipping_fee}</p>
                </div> : null}
            </div>
        </>
    )
}
export default memo(CartItem)