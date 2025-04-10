import CartItem from '../../components/Cart'

import { useCartContext } from '../../components/Cart/context'

const Cart = () => {
    const {
        cart,
        setIncrement,
        setDecrement,
        removeCart,
        getSubTotal,
        subTotal,
    } = useCartContext()
    return (
        <>
            <CartItem
                cart={cart}
                setIncrement={setIncrement}
                setDecrement={setDecrement}
                removeCart={removeCart}
                getSubTotal={getSubTotal}
                subTotal={subTotal}
            />
        </>
    )
}

export default Cart