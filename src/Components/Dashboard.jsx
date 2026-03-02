import React, { useEffect, useState } from "react";
import "../App.css";
import Graduation from "../assets/icons/Graduation.png";
import Note from "../assets/icons/Note.png";
import Book from "../assets/icons/book.png";
import quiz from "../assets/icons/quiz.png";
import Globe from "../assets/icons/Globe.png";
import Medal from "../assets/icons/Handcrafted Clay Medal.png";
import { Link } from "react-router-dom";
import DashboardApi from "./Dashboard/DashboardApi";
import DashboardApi2 from "./Dashboard/DashboardApi2";

function Dashboard() {
  const [counter, setCounter] = useState(0);
  const [manage, setManage] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    let counterUp;
    if (manage) {
      counterUp = setInterval(() => {
        setCounter((val) => val + 1);
      }, 1000);
    }
    return () => clearInterval(counterUp);
  }, [manage]);

  const minutes = String(Math.floor(counter / 60)).padStart(2, "0");
  const seconds = String(Math.floor(counter % 60)).padStart(2, "0");

  const handleStart = () => {
    setManage(true);
    setButton(true);
  };

  const handleStop = () => {
    setManage(false);
    setButton(false);
  };

  const handleReset = () => {
    setCounter(0);
    setManage(false);
    setButton(true);
  };

  return (
    <div className="grid-cover h-full bg-slate-300 ">
      <div className="grid-container ">
        <div
          className="flex justify-around items-center p-8 md:p-0 bg-blue-800 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow   text-white"
          style={{ gridArea: "box-1" }}
        >
          <div className="md:w-1/2">
            <h1 className="text-sm font-thin">21-02-2026</h1>
            <h1 className="text-lg 2xl:text-3xl lg:text-xl font-bold">
              Welcome Abdul Samad PM
            </h1>

            <DashboardApi2 />
          </div>

          <div className="overflow-hidden">
            <img
              src={Graduation}
              alt=""
              className="h-56 w-56 hidden md:block"
            />
          </div>
        </div>
        <div
          className="flex  flex-col justify-between p-3 bg-pink-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-2" }}
        >
          <div className="bg-pink-200  w-full lg:h-1/2 flex justify-center items-center">
            <img
              src={Globe}
              alt=""
              className=" max-[890px]:w-10  max-[890px]:h-10 w-32 h-32 object-contain mx-auto"
            />
          </div>
          <div className="p-3">
            <h2 className="text-base text-center text-blue-800 font-bold mb-4 ">
              Build Your Legacy, One Lesson at a Time.
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-lg max-[890px]:hidden text-center">
              <DashboardApi />
            </p>
            <Link to={"/Courses"}>
              <button
                className=" sm:mt-4  2xl:mt-6 bg-blue-800 text-[11px] 
             w-full sm:text-xs 2xl:text-base text-white font-normal sm:font-semibold  py-2 px-6 rounded-lg  hover:bg-blue-900 transition-colors"
              >
                Continue Learning
              </button>
            </Link>
          </div>
        </div>
        <Link to={"/Dictionary"}>
          <div
            className="flex  flex-col justify-between p-3 bg-yellow-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
            style={{ gridArea: "box-3" }}
          >
            <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center  justify-center">
              <img src={Book} className="w-10 h-10 object-contain" />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <h1 className="font-bold text-blue-800">Dictionary Section</h1>
              <h3 className="text-slate-500 font-medium text-sm">
                Review Tasks
              </h3>
              <p className="text-3xl font-bold text-slate-800"></p>
            </div>
          </div>
        </Link>

        <div
          className="flex  flex-col justify-between p-3 bg-red-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-4" }}
        >
          <div className="w-14 h-14 mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <img src={quiz} className="w-10 h-10 object-contain" />
          </div>

          <Link to={"Quiz"}>
            <div className="flex flex-col gap-1 text-left">
              <h1 className="font-bold text-blue-800">Quiz Section</h1>
              <h3 className="text-slate-500 font-medium text-sm">
                Check it out
              </h3>
              <p className="text-3xl font-bold text-slate-800"></p>
            </div>
          </Link>
        </div>

        <Link to={"/Courses"}>
          <div
            className="flex  flex-col justify-between p-3 bg-pink-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
            style={{ gridArea: "box-5" }}
          >
            <div className="w-14 h-14 mb-4 bg-pink-50 rounded-full flex items-center justify-center">
              <img src={Note} className="w-10 h-10 object-contain" />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <h1 className="font-bold text-blue-800">Note Section</h1>
              <h3 className="text-slate-500 font-medium text-sm">
                More to learn
              </h3>
              <p className="text-3xl font-bold text-slate-800"></p>
            </div>
          </div>
        </Link>

        <div
          className="flex  flex-col justify-between p-3 bg-orange-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-6" }}
        >
          <div className="w-14 h-14 mb-4 bg-white rounded-full flex items-center justify-center">
            <img src={Medal} className="w-10 h-10 object-contain" />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm">
              Victory Vault
            </h3>
            <p className="text-sm font-medium  text-slate-600">
              Success is a series of small wins played out over time. You’ve put
              in the work, faced the challenges, and come out on top
            </p>
          </div>
        </div>

        <div
          className="flex  flex-col justify-between p-3 bg-yellow-200 rounded-2xl shadow-sm border
 border-slate-100 hover:shadow-md transition-shadow h-full"
          style={{ gridArea: "box-7" }}
        >
          <div className="w-14 h-14 mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <img src={Medal} className="w-10 h-10 object-contain" />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-slate-500 font-medium text-sm pb-3">
              Gather More
            </h3>
            <button className="py-2 px-3 rounded-lg bg-yellow-700 text-white font-semibold hover:bg-yellow-900">
              Learn
            </button>
          </div>
        </div>

        <div
          className="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl"
          style={{ gridArea: "box-8" }}
        >
          <h2 className="text-xl font-bold text-indigo-900 mb-1">
            Study Timer
          </h2>
          <h1 className="text-blue-800 text-xl font-bold ">
            {minutes}:{seconds}
          </h1>
          <p>Message</p>
          <div className="flex flex-wrap gap-5 mt-1">
            <button
              onClick={handleStart}
              className="py-2 px-6 bg-green-800 hover:bg-green-900 text-white rounded-lg font-bold"
            >
              Start
            </button>
            {button ? (
              <button
                onClick={handleStop}
                className="py-2 px-6 bg-red-800 hover:bg-red-900 text-white rounded-lg font-bold"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="py-2 px-6 bg-blue-700 hover:bg-blue-900 text-white rounded-lg font-bold"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
