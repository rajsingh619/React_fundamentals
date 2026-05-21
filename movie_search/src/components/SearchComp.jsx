import { useState } from "react";

export default function SearchComp({onSearch}) {
    const [search, setSearch] = useState("");
    
    function handleChange(e){
        setSearch(e.target.value);
    }

    return (
    <div className="flex justify-center">
      <div className="h-32 w-1/2 bg-[#222831] rounded-3xl flex flex-col text-center ">
        <label htmlFor="" className="text-white text-xl m-4">
          Search Movies:
        </label>
        <div>
          <input
            type="text"
            className="bg-[#EEEEEE] h-12 w-1/3 rounded-2xl text-2xl font-semibold p-2"
            onChange={handleChange}
          />
          <button className="bg-[#76ABAE] h-12 w-24 rounded-2xl text-xl font-bold text-white ml-2 hover:bg-[#31363F]" onClick={()=>onSearch(search)}>Search</button>
        </div>
      </div>
    </div>
  );
}
