import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from 'react-redux'
import { calculateSubtotal } from './features/cart/cartSlice'
import { useEffect } from "react";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateSubtotal())
  }, [cartItems])
  
  return (
    <main className="App">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
