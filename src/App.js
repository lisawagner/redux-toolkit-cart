import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { calculateSubtotal } from './features/cart/cartSlice'
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal"

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateSubtotal())
  }, [cartItems])
  
  return (
    <main className="App">
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
