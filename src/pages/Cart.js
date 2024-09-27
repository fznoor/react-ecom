import React from 'react'
import CartItem from '../component/CartItem'
import { useSelector } from 'react-redux'
import { setDecrement, setIncrement, removeCart } from '../redux/product/product_action'

function Cart() {
  const { cart, sub_total, shipping_fee } = useSelector(state => state.productReducer)
  return (
    <>
      <div className="cartPage">
        <CartItem
          cart={cart}
          setDecrement={setDecrement}
          setIncrement={setIncrement}
          removeCart={removeCart}
          sub_total={sub_total}
          shipping_fee={shipping_fee}
        />
      </div>
    </>
  )
}

export default Cart