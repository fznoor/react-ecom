const initialState = {
    product: [],
    singleProduct: {},
    cart: [],
    sub_total: '',
    shipping_fee: '5',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload,
            }

        case 'SET_SINGLE_PRODUCT':
            return {
                ...state,
                singleProduct: action.payload
            }

        case 'SET_ADD_TO_CART':
            let { id, image, price, title, description, quantity } = action.payload

            // handling existing product 
            const existingProduct = state.cart.find((curItem) => curItem.id === action.payload.id)
            if (existingProduct) {
                let updatedProduct = state.cart.map((curItem) => {
                    if (curItem.id === action.payload.id) {
                        let newQuantity = curItem.quantity + 1
                        return {
                            ...curItem,
                            quantity: newQuantity
                        }
                    } else {
                        return curItem
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct
                }
                // handling existingProduct end 
            } else {
                const cartProduct = {
                    id,
                    image,
                    price,
                    title,
                    description,
                    quantity
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }

        // handling cart count 
        case 'SET_DECREMENT':
            let updateDecProduct = state.cart.map((curItem) => {
                if (curItem.id === action.payload) {
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
            return {
                ...state,
                cart: updateDecProduct
            }

        case 'SET_INCREMENT':
            let updateIncProduct = state.cart.map((curItem) => {
                if (curItem.id === action.payload) {
                    let incQuantity = curItem.quantity + 1
                    return {
                        ...curItem,
                        quantity: incQuantity
                    }
                } else {
                    return curItem
                }
            })
            return {
                ...state,
                cart: updateIncProduct
            }


        case 'SET_REMOVE_CART':
            let filterCart = state.cart.filter((curItem) => curItem.id !== action.payload)
            return {
                ...state,
                cart: filterCart
            }

        case 'SET_SUB_TOTAL':
            let updateSubTotal = state.cart.reduce((initialVal, curElem) => {
                return initialVal + curElem.price * curElem.quantity
            }, 0)
            return {
                ...state,
                sub_total: updateSubTotal
            }

        // by default return state  
        default: return state
    }

}

export default productReducer
