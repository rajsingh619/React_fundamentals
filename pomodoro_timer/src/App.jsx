import Header from "./components/Header"
import Timer from "./components/Timer"


export default function App(){
  return (
   <>
   <div className="bg-linear-to-r from-blue-400 to-purple-400 h-screen w-screen">
    <Header/>
    <Timer targetTime={1500}/>
  
   </div>
   
   </>
  )
}