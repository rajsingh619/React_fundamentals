import { useState } from "react";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import ShowExpense from "./components/ShowExpense";

function App() {
   const [expenses, setExpenses] = useState([]);

   function handleExpense(newExpense){
      setExpenses((prevExpense)=>[...prevExpense,newExpense])
   }


  return (
    <>
      <Header/>
      <AddExpense onAddExpense ={handleExpense}/>
      <ShowExpense allExpenses = {expenses}/>
    </>
  );
}

export default App;
