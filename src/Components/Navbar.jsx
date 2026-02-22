import React, { useState } from "react";
import { PencilLine } from "lucide-react";

function Navbar() {
  return (
    <div className='bg-white shrink-0 h-20  z-50'>
        <div className=" pt-5"> 
          <div className="bg-slate-200  h-14 w-60 ml-2 flex justify-center items-center gap-5 text-black text-lg font-semibold
          rounded-lg cursor-default">
            <PencilLine color="blue" />
            Qalam Academy
          </div>
        </div>
    </div>

    
  )
}

export default Navbar

