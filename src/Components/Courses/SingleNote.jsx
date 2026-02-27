import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function SingleNote() {
  const params = useParams();

  const { noteId } = params;

  const singleNote = useSelector((state) => {
    return state.notes.allNotes.find((value) => value.id === parseInt(noteId));
  });

  return (
    <div className="p-10 bg-slate-300 h-screen">
      
        <div key={singleNote.id} className="p-5 bg-white rounded-lg">
          <div className="p-2 border-2 border-slate-600 mb-1 rounded-md">
            <h1 className="text-2xl font-bold text-blue-800">{singleNote.title}</h1>
          </div>
          <div className="p-2 border-2 border-slate-600 rounded-md">
            <h1 className="leading-relaxed tracking-wide">{singleNote.document}</h1>
            <div className="mt-3 flex gap-2 sm:gap-4 justify-end">
              <Link to={"/Courses"}>
              <button className=" py-2 px-4 bg-blue-800 hover:bg-blue-900 rounded-lg text-white font-bold">
                Course Page
              </button>
              </Link>
              
              <button className="py-2 px-4 bg-green-800 hover:bg-green-900 rounded-lg text-white font-bold">
                Completed
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default SingleNote;
