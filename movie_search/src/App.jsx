import Header from "./components/Header";
import SearchComp from "./components/SearchComp";
import ContentArea from "./components/ContentArea";

function App() {
  return (
    <div className="bg-[#31363F] min-h-screen" >
      <Header/>
      <SearchComp/>
      <ContentArea/>
    </div>
  )
}

export default App;
