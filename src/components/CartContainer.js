import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const CartContainer = () => {
  const { cartItems, totalCost, quantity } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if(quantity < 1) {
    return (
      <div className='cart'>
        <h1>Order Summary</h1>
        <div><h3>cart is currently empty</h3></div>
      </div>
    )
  }
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>My Cart</h1> 
      </div>
      
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className='cart-footer'>
        {/* <hr/> */}
        <div className='total-cost-checkout'>
          <button className='btn checkout-btn hover-right'>
            <span>checkout</span>
          </button>
          <p>Subtotal: </p><h3>${totalCost.toFixed(2)}</h3>
        </div>

        <div className='cart-footer-btns'>
          <button className='btn clear-btn'>
            <span>continue shopping</span>
          </button>
          <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
            <span>clear cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartContainer