import React from "react";
import python from "../../assets/Quiz/python.png";
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"





function QuizIntro() {

    const questionArray = useSelector((state)=> state.quizzes.allQuizzes)
    console.log(questionArray);
    

  return (
    <div className="bg-slate-300  ">
      <div>
        <h1 className="text-4xl text-blue-800 font-bold ">Quiz Section</h1>
      </div>
      <div className="p-5 mt-10 grid grid-cols-3 gap-5 justify-center items-center
       max-[1113px]:grid-cols-2  max-[732px]:grid-cols-1"> 
       {
        questionArray.map(({id, image, title})=> (
            <div key={id} className="bg-blue-800 shadow-lg h-72 w-80 rounded-md hover:-translate-y-3 transition overflow-hidden">
             <div className="w-full h-1/2 bg-black border border-blue-800 rounded-md overflow-hidden">
             <img src={image} alt="" className="w-full h-full object-cover object-top" />

             </div>
             <div className="flex flex-col items-center gap-10 mt-3 ">
                <h1 className="text-2xl font-bold text-white ">{title}</h1>
                <div>
                  <Link to={`/Quiz/${id}`}>
                  <button className="py-2 px-4 text-blue-800 font-bold rounded-lg 
                 bg-white">Start Quiz</button>
                  </Link>
                
             </div>
             </div>
        </div>

        ))
       }

        

      </div>

    </div>
  );
}

export default QuizIntro;
