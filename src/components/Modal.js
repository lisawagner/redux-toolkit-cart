import React from 'react'

const Modal = () => {
  return (
    <>
      <aside className='modal-container'>
        <div className='modal'>
          <h4>remove all items?</h4>
          <div className='btn-container'>
            <button
              type='button'
              className='btn confirm-btn'
              // onClick={() => {
              //   dispatch(clearCart());
              //   dispatch(closeModal());
              // }}
            >
              <span>confirm</span>
            </button>
            <button
              type='button'
              className='btn clear-btn'
              // onClick={() => {
              //   dispatch(closeModal());
              // }}
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