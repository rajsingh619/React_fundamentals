import { useState } from "react"
import { itemsArray } from "./data"
import Header from "./components/Header"
import Items from "./components/Items"
import Cart from "./components/Cart"


function App() {
  const [shoppingCart, setShoppingCart] = useState(itemsArray);

  function handleCartChange(id){
    setShoppingCart((prevShoppingCart)=>{
      const updatedCart = [...prevShoppingCart];
      updatedCart.forEach((cartItems)=>{
        if(cartItems.id===id){
          cartItems.cartCount = cartItems.cartCount +1;
        }
      })
      return updatedCart;
    })
  }

  return (
    <>
      <Header/>
      <Items onChangeCart = {handleCartChange}/>
      <Cart shopCart = {shoppingCart}/>
    </>
  )
}

export default App
