import axios from 'axios'

export const fetchProduct = (API_URL) => {
    return async (dispatch) => {
        let res = await axios.get(API_URL)
        let data = await res.data
        dispatch({ type: 'SET_PRODUCT', payload: data })
    }
}

export const filterProduct = (curCat) => {
    dispatch({ type: 'SET_FILTER_PRODUCT', payload: curCat })
}

export const fetchSingleProduct = (url) => {
    return async (dispatch) => {
        let res = await axios.get(url)
        let data = await res.data
        dispatch({ type: 'SET_SINGLE_PRODUCT', payload: data })
    }
}

export const addToCart = (id, image, price, title, description, quantity) => {
    return {
        type: 'SET_ADD_TO_CART',
        payload: { id, image, price, title, description, quantity }
    }
}

// handle cart count 
export const setDecrement = (id) => {
    return {
        type: 'SET_DECREMENT',
        payload: id
    }
}
export const setIncrement = (id) => {
    return {
        type: 'SET_INCREMENT',
        payload: id
    }
}

// handle remove cart 
export const removeCart = (id) => {
    return {
        type: 'SET_REMOVE_CART',
        payload: id
    }
}