import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, totalCost, itemQuantity } = useSelector((store) => store.cart);

  if(itemQuantity > 1) {
    return (
      <div className='cart'>
        <h1>Order Summary</h1>
        <div><h3>cart is currently empty</h3></div>
      </div>
    )
  }
  return (
    <div className='cart'>
      <div className='cart-header'></div>
      <h1>Order Summary</h1>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <div className='cart-footer'>
        <hr/>
        <div className='total-cost'>
          <h3>Total <span>${totalCost.toFixed(2)}</span></h3>
        </div>
        <button className='btn clear-btn'>continue shopping</button>
        <button className='btn clear-btn'>clear cart</button>
      </div>
    </div>
  )
}

export default CartContainer