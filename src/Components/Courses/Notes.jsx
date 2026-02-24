import React from "react";
import "./Note.css"
import Globe from "../../assets/icons/Globe.png";
import Notes2 from "./Notes2";

function Notes() {
  return (
    <div className=" p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-800">My courses</h1>
        </div>
        <div
          className="bg-white/30 backdrop-blur-md border border-white/20 h-14 p-1 w-2/6  rounded-3xl shadow-xl
         overflow-hidden"
        >
          <ul className="flex gap-5 items-center p-2 text-center">
            <li
              className="border-2 border-blue-800 h-8 w-14 rounded-lg text-lg font-medium  cursor-pointer
           hover:bg-blue-800 hover:text-white"
            >
              All
            </li>
            <li
              className="border-2 border-blue-800 h-8 w-28  rounded-lg text-lg font-medium  cursor-pointer
           hover:bg-blue-800 hover:text-white"
            >
              JavaScript
            </li>
            <li
              className="border-2 border-blue-800 h-8 w-20 rounded-lg text-lg font-medium  cursor-pointer
           hover:bg-blue-800 hover:text-white transition"
            >
              Python
            </li>
            <li
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
