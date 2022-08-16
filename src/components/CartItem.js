import { useDispatch } from 'react-redux'
import { removeItem, increment, decrement } from '../features/cart/cartSlice'
import { RiAddLine, RiSubtractLine, RiDeleteBinLine } from "react-icons/ri";

const CartItem = ({ id, img, productName, price, quantity }) => {
  const dispatch = useDispatch()
  return (
    <div className='cart-item-wrap'>
      <div className='cart-item-container'>
        <div className='cart-left-wrap'>
          <div className='cart-img-wrap'>
            <img src={img} alt={productName} />
          </div>
          <div className="product-name">
            <h3 >{productName}</h3>
            <p>descriptive subtitle details</p>
          </div>
          
        </div>

        <div className="cart-item-details">
          <div className='cart-item-quantity'>

            <button
              className='quantity-btn'
              onClick={() => {
                dispatch(increment({ id }))
              }}>
              <RiAddLine />
            </button>

            <span className="quantity">{quantity}</span>

            <button
              className='quantity-btn'
              onClick={() => {
                if(quantity === 1) {
                  dispatch(removeItem(id))
                  return
                }
                dispatch(decrement({ id }))
              }}>
              <RiSubtractLine />
            </button>

          </div>
          <div className='cart-item-price'>
            <h3>${price}</h3>
          </div>
        </div>

        <div className='cart-item-delete'>
          <button
            className='delete-btn'
            onClick={() => {
              dispatch(removeItem(id))
            }}>
            <RiDeleteBinLine />
          </button> 
        </div>

      </div>
    </div>
  )
}

export default CartItem