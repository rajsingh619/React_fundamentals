export default function Cart({ shopCart }) {
    const updatedCart = shopCart.filter((cartItems)=>cartItems.cartCount>=1);

    let subTotal = 0;
    updatedCart.forEach((cartItems)=>subTotal= subTotal+ cartItems.price*cartItems.cartCount);
  return (
    <div className="m-12">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="bg-blue-100 ">
        <ol className="">
            {updatedCart.map((cartItems)=>{
                return <li key={cartItems.id} className="flex gap-2">
                    <img className="h-24 w-24 object-contain" src={cartItems.image} alt=""  />
                    <p className="m-4">{cartItems.itemName}</p>
                    <p className="m-4">Quantity = {cartItems.cartCount}</p>
                    <p className="m-4">${cartItems.price}</p>
                </li>
            })}
        </ol>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Order summary</h1>
            <p>Subtotal = ${subTotal}</p>   
      </div>
    </div>
  );
}
