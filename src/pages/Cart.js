import React from 'react'
import CartItem from '../component/CartItem'
import { useGlobalContext } from '../context/context'

function Cart() {
  const { cart, setDecrement, setIncrement, removeCart, dispatch, sub_total, shipping_fee } = useGlobalContext()
  return (
    <>
      <div className="cartPage">
        <CartItem
          cart={cart}
          setDecrement={setDecrement}
          setIncrement={setIncrement}
          removeCart={removeCart}
          dispatch={dispatch}
          sub_total={sub_total}
          shipping_fee={shipping_fee}
        />
      </div>
    </>
  )
}

export default Cart