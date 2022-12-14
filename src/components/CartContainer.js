import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
// import { clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
  const { cartItems, totalCost, quantity } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if(quantity < 1) {
    return (
      <div className='empty-cart-wrap'>
        <h1>Order Summary</h1>
        <h3>cart is currently empty</h3>
        <button className='btn clear-btn' onClick={() => window.location.reload(false)}>
          <span>reload cart</span>
        </button>
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
          <button className='btn checkout-btn hide'>
            <span>checkout</span>
          </button>
          <div className='subtotal'>
            <p>Subtotal: </p>
            <h3>${totalCost.toFixed(2)}</h3>
          </div>
        </div>

        <div className='cart-footer-btns'>
          <button className='btn clear-btn hide'>
            <span>continue shopping</span>
          </button>
          <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
            <span>clear cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartContainer