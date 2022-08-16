import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <aside className='modal-container'>
        <div className='modal'>
          <h4>remove all items?</h4>
          <div className='btn-container'>
            <button
              type='button'
              className='btn'
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              <span>confirm</span>
            </button>
            <button
              type='button'
              className='btn checkout-btn'
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <span>cancel</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Modal