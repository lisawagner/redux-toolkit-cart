import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../data/cartItems'

const initialState = {
  cartItems: cartItems,
  itemQuantity: 0,
  totalCost: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

// console.log(cartSlice);

export default cartSlice.reducer