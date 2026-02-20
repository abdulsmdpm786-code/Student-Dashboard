import React from 'react'
import { PencilLine, TableCellsMerge, BookCheck, Album, MessageCircleQuestionMark   } from "lucide-react";

function SideNav() {
  return (

    <div className="h-screen w-64 bg-white px-2 shadow-lg">
        <div className=" pt-5"> 
          <div className="bg-slate-200 p-4 mx-3 flex gap-5 text-black text-lg font-semibold
          rounded-lg cursor-default">
            <PencilLine color="blue" />
            Qalam Academy
          </div>
        </div>
        <div className="mt-32">
          <div className="p-4 mx-3  flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800">
            <TableCellsMerge />
            Dashboard

          </div>

          <div className=" p-4 mx-3 mt-1 flex gap-5 text-gray-600text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800">
            <BookCheck />
            Tasks

          </div>

          <div className=" p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800">
            <Album />
            Courses

          </div>

          <div className="0 p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800">
            <MessageCircleQuestionMark />
            Quiz

          </div>

        </div>
      </div>
  )
}

export default SideNav