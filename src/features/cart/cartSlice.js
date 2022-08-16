import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../data/cartItems'

const initialState = {
  cartItems: cartItems,
  quantity: 0,
  totalCost: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // immer from rtk takes care of writing the immutable update to the state here
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increment: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.quantity = cartItem.quantity + 1
    },
    decrement: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.quantity = cartItem.quantity - 1
    },
    calculateSubtotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.quantity
        total += item.quantity * item.price
      })
      state.quantity = amount
      state.totalCost = total
    }
  }
})

// console.log(cartSlice);
export const{ clearCart, removeItem, increment, decrement, calculateSubtotal } = cartSlice.actions

export default cartSlice.reducer