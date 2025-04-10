import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft, FaTrash } from 'react-icons/fa6'

import { CartProps } from './type'

import { css } from '@emotion/react'

const styles = {
    cart: css`
        margin: 7rem auto 0 auto;
        width: 70%;
        box-shadow: 0px 2px 3px 0px rgb(217, 217, 217);
        padding: 2rem;
        position: relative;
        margin-bottom: 20rem;

        @media (max-width: 800px) {
            width: 80%;
        }
    
        h1 {
            border-bottom: 1px solid silver;
            padding-bottom: 3rem;
        }
            `,
    cartNamings: css`
            margin: 1rem 1rem;
            display: flex;
            justify-content: space-between;
    
            p {
                font-size: 1.2rem;
                color: rgb(122, 122, 122);
            }
        `,
    cartItem: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 2rem 2rem 2rem 0;
            position: relative;
    
            img {
                width: 3rem;
            }
    
            button {
                background: transparent;
                border: none;
                padding: 0 .5rem;
                font-size: 1.6rem;
                color: blue;
                font-weight: bold;
                cursor: pointer;
            }
    
    
            input {
                width: 2rem;
                text-align: center;
            }
    `,
    removeBtn: css`
                background: none;
                border: none;
                color: red;
                cursor: pointer;
    `,
    totalDetails: css`
            font-size: 1.4rem;
            background: rgb(250, 250, 250);
            width: 30rem;
            display: grid;
            grid-template-columns: 1fr 30px;
            padding: 2rem 5rem 1rem 2rem;
            position: absolute;
            bottom: -150px;
            right: 0;
            
             @media (max-width: 800px) {
              width: 100% !important;
            }
    
            span:nth-child(3) {
                border-bottom: 1px solid rgb(160, 160, 160);
                margin-bottom: 1rem;
            }
    
            p {
                padding: 1rem 0;
            }
`
}

const CartItem = ({
    cart,
    setIncrement,
    setDecrement,
    removeCart,
    getSubTotal,
    subTotal,
}: CartProps) => {

    useEffect(() => {
        getSubTotal()
    }, [cart])

    const SHIPPING_FEE = '5'
    return (
        <>
            <div css={styles.cart}>
                <h1>Shopping Cart</h1>
                <div css={styles.cartNamings}>
                    <p>Item</p>
                    <p>QUANTITY</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>

                {cart.map((curElem) => {
                    const { image, name, price, quantity, id } = curElem
                    return (
                        <>
                            <div css={styles.cartItem}>
                                <img src={image} alt={name} />
                                <span>
                                    <button onClick={() => setDecrement(id, quantity)}>-</button>
                                    <input value={quantity} />
                                    <button onClick={() => setIncrement(id, quantity)}>+</button>
                                </span>
                                <p>${price * quantity}</p>
                                <button onClick={() => removeCart(id)}>
                                    <FaTrash css={styles.removeBtn} />
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

                {cart.length >= 1 ? <div css={styles.totalDetails}>
                    <span>Subtotal:</span>
                    <p>${subTotal}</p>
                    <span>Shipping Fee:</span>
                    <p> ${SHIPPING_FEE}</p>
                    <span>Total Order:</span>
                    <p> ${subTotal + SHIPPING_FEE}</p>
                </div> : null}
            </div>
        </>
    )
}

export default CartItem