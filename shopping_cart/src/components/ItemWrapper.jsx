export default function ItemWrapper({image,price,itemName}) {
  return (
    <div className="">
      <img
        className="h-48 w-60 object-contain rounded-lg "
        src={image}
        alt="laptop image"
      />
      <p className="font-semibold m-1">{itemName}</p>
      <p className="font-semibold m-1">${price}</p>
    </div>
  );
}
