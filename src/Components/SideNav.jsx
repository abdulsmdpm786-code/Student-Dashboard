import React from "react";
import {
  PencilLine,
  TableCellsMerge,
  BookCheck,
  Album,
  MessageCircleQuestionMark,
  
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function SideNav() {

  const toggle = useSelector((state)=> state.Menu.isMenu)
  console.log(toggle);
  

  return (
    <div className={`   ${toggle ? "block" : "hidden"} xl:block h-screen fixed top-0 left-0 w-64 shrink-0 bg-white px-2 shadow-lg z-30`}>
      <div className="mt-32">
        <Link to={"/"}>
          <div
            className="p-4 mx-3  flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800"
          >
            <TableCellsMerge />
            Dashboard
          </div>
        </Link>

        

        <div
          className=" p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800"
        >
          <BookCheck />
          Tasks
        </div>

<Link to={"/Courses"}>
 <div
          className=" p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800"
        >
          <Album />
          Courses
        </div>
</Link>
       

        <Link to={"Quiz"}>
          <div
            className="0 p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800"
          >
            <MessageCircleQuestionMark />
            Quiz
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
