import { useState } from "react";
import Header from "./components/Header";
import SearchComp from "./components/SearchComp";
import ContentArea from "./components/ContentArea";


function App() {
  const [searchText, setSearchText] = useState("batman");

  function handleSearch(searchValue){
    setSearchText(searchValue)
  }
  console.log(searchText);

  return (
    <div className="bg-[#31363F] min-h-screen " >
      <Header/>
      <SearchComp onSearch={handleSearch}/>
      <ContentArea searchText={searchText}/>
    </div>
  )
}

export default App;
