import React from "react";
import "../App.css";
import Graduation from "../assets/icons/Graduation.png";
import Note from "../assets/icons/Note.png";
import Task from "../assets/icons/Todo list.png";
import quiz from "../assets/icons/quiz.png";
import Globe from "../assets/icons/Globe.png";
import Medal from "../assets/icons/Handcrafted Clay Medal.png";

function Dashboard() {
  return (
    <div className="grid-cover">
      <div className="grid-container">
        
        <div
          className="flex   justify-around items-center p-8 md:p-0 bg-blue-800 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full text-white"
          style={{ gridArea: "box-1" }}
        >
          <div>
            <h1 className="text-sm font-thin">21-02-2026</h1>
            <h1 className="text-lg 2xl:text-3xl lg:text-xl font-bold">
              Welcome Abdul Samad PM
            </h1>
          </div>

          <div className="overflow-hidden">
            <img
              src={Graduation}
              alt=""
              className="h-56 w-56 hidden md:block"
            />
          </div>
        </div>
        <div className="box" style={{ gridArea: "box-2" }}>
          <div className="bg-pink-200 h-full w-1/2  md:w-full md:h-1/2 flex justify-center items-center">
            <img src={Globe} alt="" className=" md:h-full" />
          </div>
          <div></div>
        </div>

        <div
          className="flex  flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-3" }}
        >
          {/* 1. TOP SECTION: The Icon */}
          {/* We wrap the icon in a small div to control its size so it doesn't take over the card */}
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={Task} className="w-10 h-10 object-contain" />
          </div>

          {/* 2. BOTTOM SECTION: The Data (You will add this next) */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">Active Tasks</h3>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </div>

        <div
          className="flex  flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-4" }}
        >
          {/* 1. TOP SECTION: The Icon */}
          {/* We wrap the icon in a small div to control its size so it doesn't take over the card */}
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={quiz} className="w-10 h-10 object-contain" />
          </div>

          {/* 2. BOTTOM SECTION: The Data (You will add this next) */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">Active Tasks</h3>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </div>

        <div
          className="flex  flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-5" }}
        >
          {/* 1. TOP SECTION: The Icon */}
          {/* We wrap the icon in a small div to control its size so it doesn't take over the card */}
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={Note} className="w-10 h-10 object-contain" />
          </div>

          {/* 2. BOTTOM SECTION: The Data (You will add this next) */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">Active Tasks</h3>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </div>
        {/* <div
          className="box bg-orange-300 flex justify-center items-center"
          style={{ gridArea: "box-6" }}
        >
          <div>
            <h1>More to gather</h1>
          </div>
          <div>
            <img src={Medal} alt="" className="w-32 h-28 md:w-44 md:h-48" />
          </div>
        </div> */}

        <div
          className="flex  flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-6" }}
        >
          {/* 1. TOP SECTION: The Icon */}
          {/* We wrap the icon in a small div to control its size so it doesn't take over the card */}
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={Medal} className="w-10 h-10 object-contain" />
          </div>

          {/* 2. BOTTOM SECTION: The Data (You will add this next) */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">Active Tasks</h3>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </div>

        <div
          className="flex  flex-col justify-between p-3 bg-white rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-7" }}
        >
          {/* 1. TOP SECTION: The Icon */}
          {/* We wrap the icon in a small div to control its size so it doesn't take over the card */}
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={Medal} className="w-10 h-10 object-contain" />
          </div>

          {/* 2. BOTTOM SECTION: The Data (You will add this next) */}
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">Active Tasks</h3>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </div>

        <div className="box" style={{ gridArea: "box-8" }}></div>
      </div>
    </div>
  );
}

export default Dashboard;

{
  /* The main card wrapper */
}
