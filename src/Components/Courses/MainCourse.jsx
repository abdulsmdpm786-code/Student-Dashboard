import React from "react";
import Python from "../../assets/Main Course/Python.jpg";
import JavaScript from "../../assets/Main Course/JavaScript.png";
import Java from "../../assets/Main Course/java.webp";
import CourseNotes from "./CourseNotes";

const courses = [
  {
    id: 1,
    image: Python,
    title: "Learn Python",
    Note: "Python is a high-level, easy-to-learn programming language used to build websites, software, automation tools, and even artificial intelligence systems. It was created by Guido van Rossum in 1991.",
  },
  {
    id: 2,
    image: JavaScript,
    title: "Learn JavaScript",
    Note: "JavaScript is a popular programming language used to make websites interactive and dynamic. It was created by Brendan Eich in 1995.",
  },
  {
    id: 3,
    image: Java,
    title: "Learn Java",
    Note: "Java is a powerful, object-oriented programming language used to build applications for computers, mobile devices, and the web. It was developed by James Gosling in 1995 at Sun Microsystems.",
  },
];

console.log(courses);

function MainCourse() {
  return (
    <div>
      <div className="mb-14 grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-3 gap-3 ">
        {courses.map(({ id, image, title, Note }) => (
          <div
            key={id}
            className="flex flex-col  w-full h-96     bg-white shadow-lg rounded-lg overflow-hidden
                 hover:-translate-y-3 transition-all  hover:shadow-2xl"
          >
            <div className="w-full h-1/2  bg-slate-200 ">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <div className="w-full flex-1 p-2 mb-2 text-center ">
                <h1 className="font-bold text-blue-800 mb-3 text-2xl">
                  {title}
                </h1>
                <h1 className="text-black  text-xs line-clamp-4">{Note}</h1>
              </div>
              <div className="flex gap-3 justify-around ">
                <button className="py-2 rounded-lg px-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold">
                  Learn More
                </button>
                <button className="py-2 rounded-lg px-3 bg-green-800 hover:bg-green-900 text-white font-semibold">
                  Completed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CourseNotes />
    </div>
  );
}

export default MainCourse;
