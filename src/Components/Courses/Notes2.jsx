import React from "react";
import Book from "../../assets/icons/Bookshelf3.png";
import MainCourse from "./MainCourse";
import CourseNotes from "./CourseNotes";

function Notes2() {
  return (
    <div>
      <div className="flex gap-3 mt-5 ">
        <div className="w-full lg:w-4/5 ">
          <div className="flex flex-col-reverse sm:flex-row gap-4 p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl ">
            <div className="max-w-lg  flex flex-col justify-center">
              <h1 className="text-2xl  text-white md:text-4xl font-bold mb-4">
                Welcome back, Abdul Samad!
              </h1>
              <p className="text-indigo-100 text-sm md:text-base leading-relaxed mb-3">
                You've learned 80% of your goal this week. Keep it up and
                improve your progress!
              </p>
              
            </div>
            <div className="w-full flex justify-center sm:w-1/2 ">
              <img src={Book} alt="" className="w-72 object-contain" />
            </div>
          </div>
        </div>
        <div className="w-1/3 p-2 bg-stone-700 hidden lg:block">
          
        </div>
      </div>
      <div className="w-full lg:w-[69%]  mt-5  ">
        <MainCourse />
       

      </div>

      
    </div>
  );
}

export default Notes2;
