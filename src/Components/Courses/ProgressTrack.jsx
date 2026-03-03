import React from "react";
import { useSelector } from "react-redux";

function ProgressTrack() {
  const totalNotes = useSelector((state) => state.notes.allNotes);
  const total = totalNotes.length;

  const completedNotes = totalNotes.filter((n) => n.isCompleted).length;

  const progress =
    completedNotes > 0 ? Math.floor((completedNotes / total) * 100) : 0;

  return (
    <div className="border-4 border-blue-800 p-5 rounded-lg  mt-4 flex flex-col items-center gap-2 h-40">
      <div className="flex-1 text-center">
        <h1 className="text-2xl text-blue-800 font-bold ">Progress Tracker</h1>
        <p className="text-xl font-bold text-blue-800">{progress}%</p>
      </div>

      <div className="w-full h-4  bg-slate-400 rounded-lg overflow-hidden ">
        <div
          className=" h-full transition-all duration-500 bg-blue-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressTrack;
