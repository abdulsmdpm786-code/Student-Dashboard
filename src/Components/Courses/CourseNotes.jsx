import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

function CourseNotes() {
  const noteArray = useSelector((state) => state.notes.allNotes);

  const activeCategory =useSelector((state)=> state.Note.activeCategory)
  console.log(activeCategory);
  

  const displayNotes = activeCategory === "All"
  ? noteArray 
  : noteArray.filter(notes => notes.sub === activeCategory)
  console.log(displayNotes);
  
  
  return (
    <div >
        <h1 className="text-3xl font-bold text-blue-800 mb-5">Notes</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 min-[830px]:grid-cols-3 gap-5">
        
      {displayNotes.map(({ id, title, document }) => (
        <div key={id} className="bg-white shadow-lg h-60 w-full text-center p-3 rounded-lg flex flex-col
        hover:-translate-y-3 transition-all  hover:shadow-2xl">
          <div className="flex-1">
            <h1 className="text-lg font-bold text-blue-800 mb-4">
              {title}
            </h1>
            <h1 className="line-clamp-4 text-xs">
              {document}
            </h1>
          </div>
          <div>
            <Link to={`/Courses/${id}`}>
            <button className="py-2 w-full bg-blue-800 hover:bg-blue-900 rounded-lg text-white font-bold">
              Learn More
            </button>
            </Link>
            
          </div>
        </div>
      ))}

      
    </div>
    </div>
    
  );
}

export default CourseNotes;
