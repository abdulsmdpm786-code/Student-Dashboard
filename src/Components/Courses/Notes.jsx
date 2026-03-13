import React, { useState } from "react";
import Globe from "../../assets/icons/Globe.png";
import Notes2 from "./Notes2";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Store/Slice/fromSlice";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { toggleList } from "../../Store/Slice/menuSlice";
import { toggleTimer } from "../../Store/Slice/menuSlice";

function Notes() {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.Menu.isList);

  const [isToggle, setIsToggle] = useState(true);
  const [isTimer, setIsTimer] = useState(true);

  function handleToggle() {
    dispatch(toggleList());
    setIsToggle(!isToggle);
  }

  function handleTimer() {
    dispatch(toggleTimer());
    setIsTimer(!isTimer);
  }

  return (
    <div className="  bg-slate-300 mt-20">
      <div className="flex justify-between sticky items-start top-24 z-10">
        <div className="bg-white/30 backdrop-blur-md border  border-white/20 p-2 rounded-lg">
          <h1 className="text-2xl font-bold  text-blue-800">My courses</h1>
        </div>

        <div
          className={`bg-white/30 backdrop-blur-md border border-white/20  xl:h-14 ${menu && "h-64"} p-1 xl:w-2/6 w-36 rounded-3xl shadow-xl overflow-hidden absolute right-0 z-30`}
        >
          <div className="flex items-center justify-between">
            <div>
              {isToggle ? (
                <ChevronLeft
                  onClick={() => handleToggle()}
                  className="h-10 w-10 xl:hidden text-blue-800"
                />
              ) : (
                <ChevronDown
                  onClick={() => handleToggle()}
                  className="h-10 w-10 xl:hidden text-red-800"
                />
              )}
            </div>
            <div>
              {isTimer ? (
                <ChevronRight
                  onClick={() => handleTimer()}
                  className="h-10 w-10 xl:hidden text-blue-800"
                />
              ) : (
                <ChevronDown
                  onClick={() => handleTimer()}
                  className="h-10 w-10 xl:hidden text-red-800"
                />
              )}
            </div>
          </div>

          <ul
            className={` ${menu ? " block " : "hidden"} xl:flex gap-5 items-center p-2 text-center`}
          >
            <li
              onClick={() => dispatch(setCategory("All"))}
              className={`border-2 ${menu && "mb-2"} border-blue-800 h-8 w-14 rounded-lg text-lg font-medium  cursor-pointer hover:bg-blue-800 hover:text-white`}
            >
              All
            </li>
            <li
              onClick={() => dispatch(setCategory("JavaScript"))}
              className={`border-2  ${menu && "mb-2"} border-blue-800 h-8 w-28  rounded-lg text-lg font-medium  cursor-pointer hover:bg-blue-800 hover:text-white`}
            >
              JavaScript
            </li>
            <li
              onClick={() => dispatch(setCategory("Python"))}
              className={`border-2 ${menu && "mb-2"} border-blue-800 h-8 w-20 rounded-lg text-lg font-medium  cursor-pointer hover:bg-blue-800 hover:text-white transition`}
            >
              Python
            </li>
            <li
              onClick={() => dispatch(setCategory("Java"))}
              className="border-2 border-blue-800 h-8 w-14 rounded-lg text-lg font-medium  cursor-pointer
           hover:bg-blue-800 hover:text-white"
            >
              Java
            </li>
          </ul>
        </div>
      </div>

      <Notes2 />
    </div>
  );
}

export default Notes;
