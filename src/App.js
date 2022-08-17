import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { calculateSubtotal, getCartItems } from './features/cart/cartSlice'
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"

function App() {
  const dispatch = useDispatch()
  const {cartItems, isLoading} = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calculateSubtotal())
  }, [dispatch, cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])
  
  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main className="App">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
