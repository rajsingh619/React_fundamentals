import { itemsArray } from "../data";

import ItemWrapper from "./ItemWrapper";

export default function Items({onChangeCart}) {
  return (
    <div>
      <div className="flex justify-around m-4">
        {/* 1st item starts */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[0].image}
              price={itemsArray[0].price}
              itemName={itemsArray[0].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[0].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 1st item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[1].image}
              price={itemsArray[1].price}
              itemName={itemsArray[1].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[1].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 2nd item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[2].image}
              price={itemsArray[2].price}
              itemName={itemsArray[2].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[2].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 3rd item ends */}
      </div>
      <div className="flex justify-around m-4">
        {/* 1st item starts */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[3].image}
              price={itemsArray[3].price}
              itemName={itemsArray[3].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[3].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 1st item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[4].image}
              price={itemsArray[4].price}
              itemName={itemsArray[4].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[4].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 2nd item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[5].image}
              price={itemsArray[5].price}
              itemName={itemsArray[5].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[5].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 3rd item ends */}
      </div>
      <div className="flex justify-around m-4">
        {/* 1st item starts */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[6].image}
              price={itemsArray[6].price}
              itemName={itemsArray[6].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[6].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 1st item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[7].image}
              price={itemsArray[7].price}
              itemName={itemsArray[7].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[7].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 2nd item ends */}
        <div className="flex flex-col shadow-2xl shadow-blue-300 h-fit w-fit">
          <div>
            <ItemWrapper
              image={itemsArray[8].image}
              price={itemsArray[8].price}
              itemName={itemsArray[8].itemName}
            />
          </div>
          <button onClick={()=>onChangeCart(itemsArray[8].id)} className="h-6 w-24 bg-blue-300 cursor-pointer m-2 rounded-md">
            Add 🛍️
          </button>
        </div>
        {/* 3rd item ends */}
      </div>
    </div>
  );
}
