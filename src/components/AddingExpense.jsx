// const AddingExpense = () => {

//     return (
//         <div>

//         </div>
//     );
// }
// export default AddingExpense;

// src/components/AddTransactionForm.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, removeTransaction } from "../redux/slices/transactionsSlice";
import { TrashIcon } from '@heroicons/react/24/solid'
import PieChart from "./PieChart";

const AddingExpense = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions); // Access transactions from Redux state


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return alert("Please fill all fields!");

    // Add transaction to Redux state
    dispatch(
      addTransaction({
        id: new Date().toISOString(),
        amount,
        type,
        category,
        date,
      })
    );

    // Reset form
    setAmount("");
    setCategory("");
  };


//   const transactions = [
//     { date: '2025-01-30', category: 'Fuel', amount: 50 },
//     { date: '2025-01-29', category: 'Food', amount: 20 },
//     { date: '2025-01-28', category: 'Medical', amount: 100 },
//   ];

const deleteTheRecord=(e)=>{
console.log(e)
    dispatch(removeTransaction(e))

}

  return (
    <div className="flex h-[100vh]">
    
      <div className="w-[71%] border-r-[1px] flex flex-col items-center">
        
      <table className="w-[90%] table-auto border-collapse border-[1px] mt-[2vh]">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-medium text-gray-600 text-center">Date</th>
            <th className="px-6 py-3 text-sm font-medium text-gray-600 text-center">Category</th>
            <th className="px-6 py-3 text-sm font-medium text-gray-600 text-center">Amount</th>
          
          </tr>
        </thead>


       { 
        
        transactions.length<=0?<><h1 className="w-[191%] font-[500] mt-[35px] text-center text-bold">NO RECORD FOUND</h1></>:
        <tbody>
          
         
          
          <>
          
            {transactions.map((transaction, index) => (
                <tr key={index} className="border-b h-[6vh]">
                  <td className="px-6 py-4 text-sm text-gray-800 text-center ">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 text-center ">{transaction.category}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold text-center ">${transaction.amount}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold text-center flex justify-center items-center" onClick={()=>deleteTheRecord(index)}><TrashIcon className="w-[19px] h-[39px] hover:cursor-pointer"/></td>
                </tr>
              ))}
          
          </>
          
          

          
        </tbody>}
      </table>




      <PieChart/>
        </div>
      <div className="w-[40%] h-[100vh] full border-r-[1px] px-[10px] ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  w-full h-full gap-[10px] mt-[5vh] items-center "
        >
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="w-[98%] rounded-[7px]"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-[98%] rounded-[7px]"
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[98%] rounded-[7px]"
          >
            {type === "Expense"
              ? [
                  "Fuel",
                  "Food",
                  "Medical",
                  "Entertainment",
                  "Grocery",
                  "Others",
                ].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))
              : ["Salary", "Business", "Others"].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[98%] rounded-[7px]"
          />
          <button type="submit" className="w-[13vw] h-[7vh] rounded-[3px] border-[1px]">Add Transaction</button>
        </form>


      </div>
    </div>
  );
};

export default AddingExpense;
