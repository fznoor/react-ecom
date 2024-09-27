import React, { memo, useEffect } from 'react'
import './CartItem.scss'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft, FaTrash } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'

function CartItem({ cart, setDecrement, setIncrement, removeCart, sub_total, shipping_fee }) {
    const dispatch = useDispatch()

    // change SubTotal on every cart render 
    useEffect(() => {
        dispatch({ type: 'SET_SUB_TOTAL' })
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
                                    <button onClick={() => dispatch(setDecrement(id))}>-</button>
                                    <input value={quantity} />
                                    <button onClick={() => dispatch(setIncrement(id))}>+</button>
                                </span>
                                <p>${price * quantity}</p>
                                <button className='removeBtn' onClick={() => dispatch(removeCart(id))}>
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