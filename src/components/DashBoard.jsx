import { useState } from "react";
import Navbar from "../Navbar";
import AddingExpense from "./AddingExpense";
import ChartShowing from "./ChartShowing";


const Dashboard=()=>{

    const [ToDisplay,setToDisplay]=useState(true);
return(
    <>
    <Navbar/>

    <div className="h-[90vh] w-[98vw] flex">
        <div className="w-[14vw] h-[90vh] border-r-2 flex flex-col items-center">

            <button className="w-[90%] border-2 border-[#d1d1d1]  h-[6vh] mt-[15px] rounded-[12px] tracking-[2px]" onClick={()=>setToDisplay(true)}>
                   Expense Add
            </button>
            <button className="w-[90%] border-2  h-[6vh] mt-[15px]  border-[#d1d1d1] rounded-[12px] tracking-[2px]" onClick={()=>setToDisplay(false)}>
                     Expense Show
            </button>
            

        </div>

    <div className="flex-1 p-10">
    {

        ToDisplay?<AddingExpense/>:<ChartShowing/>
    }   
      
    </div>



    </div>
    
    </>
)
}

export default Dashboard;