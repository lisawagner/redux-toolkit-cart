import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
// import cartItems from '../../data/cartItems'
import axios from 'axios';
import { openModal } from '../modal/modalSlice';

const URL = 'https://gist.githubusercontent.com/lisawagner/49b2c3c2e949aaf54333ec343a2e8173/raw/da4138e04dd54b0983b5f68ddc1db9b4d6acce4d/cart-data.json'

const initialState = {
  // cartItems: cartItems,
  cartItems: [],
  quantity: 0,
  totalCost: 0,
  isLoading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems',
  async (name, thunkAPI) => {
  
    try {
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal())
      const resp = await axios(URL)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  // return fetch(URL)
  //   .then(resp => resp.json())
  //   .catch((err) => console.log(err)
})

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
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false
    }
  }
})

// console.log(cartSlice);
export const { clearCart, removeItem, increment, decrement, calculateSubtotal } = cartSlice.actions

export default cartSlice.reducer