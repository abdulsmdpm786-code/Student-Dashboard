import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    javaScript: [
        {
    id: "js1",
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "define"],
    correctAnswer: "let"
  },
  {
    id: "js2",
    question: "Which method converts JSON data into a JavaScript object?",
    options: ["parse()", "stringify()", "convert()", "toObject()"],
    correctAnswer: "parse()"
  },
  {
    id: "js3",
    question: "Which symbol is used for strict equality comparison?",
    options: ["==", "===", "!=", "="],
    correctAnswer: "==="
  },
  {
    id: "js4",
    question: "Which function is used to print output in the console?",
    options: ["print()", "console.log()", "echo()", "write()"],
    correctAnswer: "console.log()"
  },
  {
    id: "js5",
    question: "Which keyword is used to define a constant variable?",
    options: ["let", "var", "const", "static"],
    correctAnswer: "const"
  },
  {
    id: "js6",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    correctAnswer: "push()"
  },
  {
    id: "js7",
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    correctAnswer: "Netscape"
  },
  {
    id: "js8",
    question: "Which keyword is used to create a class in ES6?",
    options: ["function", "object", "class", "define"],
    correctAnswer: "class"
  },
  {
    id: "js9",
    question: "Which method removes the last element of an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    correctAnswer: "pop()"
  },
  {
    id: "js10",
    question: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while"
  }
    ]
}

export const javaScriptQuiz = createSlice({
    name: "javaScript",
    initialState,
    reducers: {

    }
})

export default javaScriptQuiz.reducer