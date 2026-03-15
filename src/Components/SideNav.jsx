import React, { useState } from "react";
import {
  PencilLine,
  TableCellsMerge,
  BookCheck,
  Album,
  MessageCircleQuestionMark,
BookA
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function SideNav() {

  const toggle = useSelector((state)=> state.Menu.isMenu)
  const [menu, setMenu] = useState(true);

  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(toggleMenu());
    setMenu(!toggle);
  }

  return (
    <>
    {/* {menu && (
    <div 
      className="fixed inset-0 bg-black/40 z-20 xl:hidden animate-fade-in" 
      onClick={() => handleMenu()} 
    />
  )} */}

    <div className={`   ${toggle ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 transition-transform duration-300 ease-in-out h-screen fixed top-0 left-0 w-64 shrink-0 bg-white px-2 shadow-lg z-30`}>
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
         <Link to={"/Dictionary"}>
          <div
            className="0 p-4 mx-3 mt-1 flex gap-5 text-gray-600 text-lg font-semibold
          rounded-lg cursor-default hover:bg-slate-200 hover:text-blue-800"
          >
            <BookA />
            Dictionary
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default SideNav;
