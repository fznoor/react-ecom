import React from 'react'

import { ICart } from './type'
import { CartContextProps } from './type'

const CartContext = React.createContext<CartContextProps>({
    cart: [],
    addToCart: () => { },
    setIncrement: () => { },
    setDecrement: () => { },
    removeCart: () => { },
    getSubTotal: () => { },
    subTotal: null
})

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
    const [cart, setCart] = React.useState<ICart[]>([])
    const [subTotal, setSubTotal] = React.useState<number | null>(null)
    const quantity = 1

    const addToCart = (
        id: number,
        image: string,
        title: string,
        price: number
    ) => {
        const isExistingCart = cart.find((cart) => cart.id === id)
        if (isExistingCart) {
            alert('This cart was already added!')
        } else {
            alert('Your cart is added')
            const newCart = {
                id,
                image,
                title,
                price,
                quantity
            }
            setCart([...cart, newCart])
        }
    }

    const setIncrement = (id: number, quantity: number) => {
        const updatedCart = cart.map((curItem) => {
            let incQunatity = quantity + 1
            if (curItem.id === id) {
                return {
                    ...curItem,
                    quantity: incQunatity
                }
            } else {
                return curItem
            }
        })
        setCart(updatedCart)
    }

    const setDecrement = (id: number) => {
        const updatedCart = cart.map((curItem) => {
            if (curItem.id === id) {
                let decQuantity = curItem.quantity - 1
                if (decQuantity < 1) {
                    decQuantity = 1
                }
                return {
                    ...curItem,
                    quantity: decQuantity
                }
            } else {
                return curItem
            }
        })
        setCart(updatedCart)
    }

    const removeCart = (id: number) => {
        const filterCart = cart.filter((cart) => cart.id !== id)
        setCart(filterCart)
    }

    const getSubTotal = () => {
        const updtateSubTotal = cart.reduce((intialVal, curCart) => {
            return intialVal + curCart.quantity * curCart.price
        }, 0)
        setSubTotal(updtateSubTotal)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            setIncrement,
            setDecrement,
            removeCart,
            getSubTotal,
            subTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => React.useContext(CartContext)