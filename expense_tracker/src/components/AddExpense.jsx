import { useState } from "react"

const INITIAL_FORM_STATE = {
    description: "",
    amount: "",
    category: "Food"
};

export default function AddExpense({onAddExpense}){
   
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    function handleAddExpense(){
        // Validation (optional but recommended)
        if (!formData.description || !formData.amount) {
            alert("Please fill all fields!");
            return;
        }
        const newExpense = {
                id: Date.now(),
                description: formData.description,
                amount: parseFloat(formData.amount),
                category: formData.category
            };
            onAddExpense(newExpense)
        
        
        // Reset the form
        setFormData(INITIAL_FORM_STATE);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div className="bg-slate-500 h-32">
            <h3 className="text-center text-4xl font-semibold">Add Expense</h3>
            <div className="flex gap-4 justify-center mt-4 h-1/3">
                <input 
                    name="description"
                    onChange={handleInputChange} 
                    type="text" 
                    placeholder="Description" 
                    value={formData.description} 
                />
                <input 
                    name="amount"
                    type="number" 
                    placeholder="Amount" 
                    onChange={handleInputChange} 
                    value={formData.amount}
                />
                <select 
                    name="category"
                    onChange={handleInputChange} 
                    value={formData.category}
                >
                    <option value="Food">Food</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Transport">Transport</option>
                    <option value="Bills">Bills</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <button 
                    onClick={handleAddExpense} 
                    className="bg-black text-white h-12 w-12 rounded-md"
                >
                    Add+
                </button>
            </div>
        </div>
    )
}