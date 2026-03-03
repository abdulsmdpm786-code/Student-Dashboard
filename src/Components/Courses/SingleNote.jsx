import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toggleComplete } from "../../Store/Slice/DataSlice";

function SingleNote() {
  const params = useParams();

  const { noteId } = params;

  const singleNote = useSelector((state) => {
    return state.notes.allNotes.find((value) => value.id === parseInt(noteId));
  });

  const { resources } = singleNote;

  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const handleToggle = () => {
    dispatch(toggleComplete(singleNote.id));
    setAlert(true);
  };

  return (
    <div className="p-1 bg-slate-300">
      <div key={singleNote.id} className="p-5 bg-white rounded-lg">
        <div className="p-2 border-2 border-slate-600 mb-1 rounded-md">
          <h1 className="text-2xl font-bold text-blue-800">
            {singleNote.title}
          </h1>
        </div>
        <div className="p-2 border-2 border-slate-600 rounded-md">
          <h1 className="text-sm leading-relaxed tracking-wide">
            {singleNote.document}
          </h1>
          {alert && <p className="text-red-800 mt-5 font-bold">Marked As Completed</p>}
          <div className="mt-3 flex gap-2 sm:gap-4 justify-between">
            <div className="flex md:flex-row flex-col gap-2">
              {resources.map((links, index) => (
                <a key={index} href={links}>
                  <button
                    className=" py-2 px-2  bg-blue-800 hover:bg-blue-900 rounded-lg text-white font-bold
                    text-sm"
                  >
                    Resources Link
                  </button>
                </a>
              ))}
            </div>
            <div className="flex sm:flex-row flex-col gap-2">
              <Link to={"/Courses"}>
                <button className="text-sm py-2 px-4 mr-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-white font-bold">
                  Course Page
                </button>
              </Link>

              <button
                onClick={() => handleToggle()}
                className="text-sm py-2 px-4 bg-green-800 hover:bg-green-900 rounded-lg text-white font-bold"
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNote;
