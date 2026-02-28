import React, { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(1500);
  const [manage, setManage] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    let counter;
    if (manage && timer > 0) {
      counter = setInterval(() => {
        setTimer((value) => value - 1);
      }, 1000);
    }
    return () => clearInterval(counter);
  }, [manage, timer]);

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  function handleStart() {
    setManage(true);
    setButton(true);
  }

  function handlePause() {
    setManage(false);
    setButton(false);
  }

  function handleStop() {
    setManage(false);
    setButton(false);
  }

  function handleReset() {
    setTimer(1500);
    setButton(true);
  }

  function shortBreak() {
    setTimer(300);
  }

  function longBreak() {
    setTimer(900)
  }

  return (
    <div className="p-2 border-4 border-white rounded-lg">
      <div className="flex justify-center gap-1">
        <button 
        onClick={handleStart}
        className="py-1 px-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">
          Pomodoro
        </button>
        <button
          onClick={shortBreak}
          className="py-1 px-1 bg-blue-800 rounded-lg text-white  font-semibold hover:bg-blue-900"
        >
          Short Break
        </button>
        <button 
        onClick={longBreak}
        className="py-1 px-1 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">
          Long Break
        </button>
      </div>
      <div>
        <h1 className="text-center mt-10 text-blue-800 font-bold text-7xl">
          {minutes}:{seconds}
        </h1>
      </div>
      <div className="flex gap-4 justify-center mt-10">
        <button
          onClick={handleStart}
          className="py-2 px-4 bg-green-800 rounded-lg text-white font-semibold hover:bg-green-900"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="py-2 px-4 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900"
        >
          Pause
        </button>

        {button ? (
          <button
            onClick={handleStop}
            className="py-2 px-4 bg-red-800 rounded-lg text-white font-semibold hover:bg-red-900"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="py-2 px-4 bg-red-800 rounded-lg text-white font-semibold hover:bg-red-900"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default Timer;
