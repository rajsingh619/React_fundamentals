import { useState } from "react";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


export default function ShowExpense({allExpenses}){
    const [selectExpense,setSelectExpense] = useState('All');

    let totalExpense = 0;
    if(selectExpense==='All'){
        totalExpense = allExpenses.reduce((accumulator, currentValue)=>accumulator + currentValue.amount,0);
    }else{
       totalExpense = allExpenses.filter((expense)=>expense.category===selectExpense).reduce((accumulator, currentValue)=>accumulator + currentValue.amount,0)
    }


    function handleSelectExpense(event){
        setSelectExpense(event.target.value)
    }
    

    return(
        <>
            <h1 className="text-3xl">Recent Expenses</h1>
            <div className="flex gap-4">
                <label htmlFor="">Filter</label>
                <select name="category" id="" onChange={handleSelectExpense} value={selectExpense}>
                    <option value="Food">Food</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Transport">Transport</option>
                    <option value="Bills">Bills</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="All">All Expense</option>
                </select>
                <h1>total Expense</h1>
                <p>{formatter.format(totalExpense)}</p>
            </div>
            <div>
                <ol>
                     {selectExpense==='All'?allExpenses.map((expense)=>{
                    return( 
                        <li className="flex gap-4" key={expense.id}>
                            <p>{expense.description}</p>
                            <p>{formatter.format(expense.amount)}</p>
                        </li>)
                    
                }):allExpenses.filter((expense)=>expense.category===selectExpense).map((expense)=>{
                    return( 
                        <li className="flex gap-4" key={expense.id}>
                            <p>{expense.description}</p>
                            <p>{formatter.format(expense.amount)}</p>
                        </li>)
                    
                })}
                </ol>
               
            </div>
        </>
    );
}