import React, { useState } from "react";
import { PencilLine, Eye, EyeClosed } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Store/Slice/menuSlice"





function Navbar() {

  const [toggle, setToggle] = useState(true)

  const dispatch = useDispatch()

  function handleMenu() {
    dispatch(toggleMenu())
    setToggle(!toggle)
  }
  
  return (
    <div className='bg-white shrink-0 h-20 sticky top-0  z-50'>
        <div className=" pt-5 flex items-center ml-4"> 
          {
            toggle ? <Eye onClick={()=> handleMenu()} className="h-8 w-8 text-blue-800 xl:hidden transition" />
            : <EyeClosed onClick={()=> handleMenu()} className="h-8 w-8 text-red-800 xl:hidden transition" />

          }
          
          <div className="bg-slate-200  h-14 w-60 ml-2 flex justify-center
           items-center gap-5 text-black text-lg font-semibold
          rounded-lg cursor-default">
            <PencilLine color="blue" />
            Qalam Academy
          </div>
        </div>
        
    </div>

    
  )
}

export default Navbar

