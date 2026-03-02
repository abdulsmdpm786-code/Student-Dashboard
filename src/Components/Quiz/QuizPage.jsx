import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QuizTimer from "./QuizTimer";

function QuizPage() {
  const quizArray = useSelector((state) => state.quizzes.allQuizzes);

  const params = useParams();

  const { quizId } = params;
  console.log(quizId);

  const quizQuestion = quizArray.find((value) => value.id === quizId);
  console.log("here got the array", quizQuestion);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { questions } = quizQuestion;
  console.log("here got the questions", questions);
  console.log("got the first", questions[questionIndex]);

  const questionArray = questions[questionIndex];
  console.log("final ", questionArray);

  if (questionIndex >= questions.length) {
    return (
      <div>
        <div className="  bg-slate-300  flex flex-col  items-center">
          <div className="p-2 bg-white rounded-lg shadow-xl ">
            <div className="p-5  rounded-lg   bg-blue-900 flex flex-col justify-center items-center gap-5">
              <h1 className="text-4xl text-white font-bold ">Quiz Complete</h1>
              <p className="text-2xl text-white font-bold ">
                Your Final Score is: {score}
              </p>
              <button
                onClick={() => {
                  setQuestionIndex(0);
                }}
                className="py-2 px-4 bg-white rounded-lg font-bold text-lg text-blue-800"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const { options } = questionArray;
  // console.log("here got the options", options);

  const { correctAnswer } = questionArray;

  function quizHandle(answer) {
    if (answer === correctAnswer) {
      setScore((score) => score + 1);
    }

    setQuestionIndex((questionIndex) => questionIndex + 1);
    console.log("index", questionIndex);

    // if(questionIndex >  question.length) {
    //   setShowResult(true)
    // }
  }

  return (
    <div className="h-full  bg-slate-300 p-10 ">
      <div className="p-2 bg-white rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="p-5  w-full rounded-lg  bg-gradient-to-r from-blue-700 to-indigo-800">
          <div className="flex flex-col items-end">
            <QuizTimer />
          </div>

          <div className="max-w-lg p-5  flex flex-col justify-center items-center">
            <h1 className="text-2xl text-white font-bold">
              {questionArray.question}
            </h1>
          </div>
        </div>
        <div className="p-5 w-full rounded-lg bg-slate-900 flex flex-col justify-center items-center gap-5">
          {options.map((buttons) => (
            <button
              onClick={() => quizHandle(buttons)}
              className="py-2  w-full border-2 border-blue-800 text-white font-bold
             hover:bg-blue-800 hover:text-white rounded-lg transition"
            >
              {buttons}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
