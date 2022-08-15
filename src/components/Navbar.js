import { useSelector } from 'react-redux'
import { RiShoppingCart2Line } from "react-icons/ri";

const style = {
  color: "white",
  fontSize: '1.5em',
  width: "40px"
}
const Navbar = () => {
  const qty = useSelector((store) => store.cart.itemQuantity)
  console.log(qty);
  // console.log(
  //   useSelector((store) => {
  //     console.log(store)
  //   })
  // );
  return (
    <>
      <nav className='header-nav'>
        <div className='header-brand'>
          <h1>RTK | Shopping Cart</h1>
        </div>
        <div className='cart-icon-wrap'>
          <RiShoppingCart2Line style={style} />
          <span className='amount-wrap'>{qty}</span>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar