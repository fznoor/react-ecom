import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/reducer'
import axios from 'axios'

const ShopContext = createContext();

const initialState = {
    menu: [],
    product: [],
    singleProduct: {},
    cart: [],
    total_price: '',
    shipping_fee: '5',
}

const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProduct = useCallback(async (API_URL) => {
        let res = await axios.get(API_URL)
        let data = await res.data
        dispatch({ type: 'SET_PRODUCT', payload: data })
    }, [])

    const filterProduct = (curCat) => {
        dispatch({ type: 'SET_FILTER_PRODUCT', payload: curCat })
    }

    const getSingleProduct = useCallback(async (url) => {
        let res = await axios.get(url)
        let data = await res.data
        dispatch({ type: 'SET_SINGLE_PRODUCT', payload: data })
    }, [])

    const addToCart = (id, image, price, title, description, quantity) => {
        dispatch({ type: 'SET_ADD_TO_CART', payload: { id, image, price, title, description, quantity } })
    }

    // handle cart count 
    const setDecrement = (id) => {
        dispatch({ type: 'SET_DECREMENT', payload: id })
    }
    const setIncrement = (id) => {
        dispatch({ type: 'SET_INCREMENT', payload: id })
    }

    // handle remove cart 
    const removeCart = (id) => {
        dispatch({ type: 'SET_REMOVE_CART', payload: id })
    }

    return (
        <ShopContext.Provider
            value={{
                ...state,
                dispatch,
                getProduct,
                filterProduct,
                addToCart,
                getSingleProduct,
                setDecrement,
                setIncrement,
                removeCart
            }}>
            {children}
        </ShopContext.Provider>
    )
}

// custom hook for consuming context
const useGlobalContext = () => {
    return useContext(ShopContext)
}

export { ShopProvider, useGlobalContext }