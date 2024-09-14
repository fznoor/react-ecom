const reducer = (state, action) => {
    if (action.type === 'SET_PRODUCT') {
        return {
            ...state,
            product: action.payload,
            menu: action.payload

        }
    }

    if (action.type === 'SET_SINGLE_PRODUCT') {
        return {
            ...state,
            singleProduct: action.payload
        }
    }

    if (action.type === 'SET_ADD_TO_CART') {
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
    }
    // filter product  
    if (action.type === 'SET_FILTER_PRODUCT') {
        let filterProduct = state.menu.filter((curItem) => curItem.category === action.payload)
        return {
            ...state,
            product: filterProduct
        }
    }

    // handling cart count 
    if (action.type === 'SET_DECREMENT') {
        let updatedProduct = state.cart.map((curItem) => {
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
            cart: updatedProduct
        }
    }

    if (action.type === 'SET_INCREMENT') {
        let updatedProduct = state.cart.map((curItem) => {
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
            cart: updatedProduct
        }
    }

    if (action.type === 'SET_REMOVE_CART') {
        let updatedProduct = state.cart.filter((curItem) => curItem.id !== action.payload)
        return {
            ...state,
            cart: updatedProduct
        }
    }
    if (action.type === 'SET_TOTAL_PRICE') {
        let updateSubTotal = state.cart.reduce((initialVal, curElem) => {
            return initialVal + curElem.price * curElem.quantity
        }, 0)
        return {
            ...state,
            sub_total: updateSubTotal
        }
    }

    // by default return state  
    return state
}

export default reducer