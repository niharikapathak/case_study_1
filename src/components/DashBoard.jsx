import { useState } from "react";
import Navbar from "../Navbar";
import AddingExpense from "./AddingExpense";
import ChartShowing from "./ChartShowing";
import { useSelector } from "react-redux";



const Dashboard=()=>{

    const [ToDisplay,setToDisplay]=useState(true);
    const user = useSelector((state) => state.user.user);

return(
    <>
    <Navbar/>

    <div className="h-[90vh] w-[98vw] flex">
        <div className="w-[14vw] h-[90vh] border-r-2 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
            <button className={`w-[90%] border-2 border-[#d1d1d1]  h-[6vh] mt-[15px] rounded-[12px] tracking-[2px] ${ToDisplay?"bg-[#d8d5d5] text-[black]":"bg-white text-black"}`} onClick={()=>setToDisplay(true)}>
                   Expense Add
            </button>
            <button className={`w-[90%] border-2 border-[#d1d1d1]  h-[6vh] mt-[15px] rounded-[12px] tracking-[2px] ${!ToDisplay?"bg-[#d8d5d5] text-[black]":"bg-white text-black"}`} onClick={()=>setToDisplay(false)}>
                     Expense Show
            </button>
            </div>

            <div className="mb-[10px]">
           
           {user ? (
             <div
               className={`Niharika bg-[url(${user.photoURL})] flex items-center h-[100%]`}
             >
               <p className="tracking-[2px] flex items-end  h-[100%] ">
                 {" "}
                 <p className="text-[10px]">HEY...</p>{" "}
                 <p className="font-[500]"> {user.displayName}</p>
               </p>
               <img
                 src={user.photoURL}
                 alt=""
                 className="rounded-[40px] w-[40px] ml-[5px]"
               />
             </div>
           ) : (
             <></>
           )}
        
       </div>

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