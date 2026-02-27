import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    python: [
        {
    id: "py1",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: "def"
  },
  {
    id: "py2",
    question: "Which data type is used to store True or False values?",
    options: ["int", "bool", "str", "float"],
    correctAnswer: "bool"
  },
  {
    id: "py3",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: "#"
  },
  {
    id: "py4",
    question: "Which function is used to display output?",
    options: ["echo()", "print()", "log()", "display()"],
    correctAnswer: "print()"
  },
  {
    id: "py5",
    question: "Which keyword is used to create a class?",
    options: ["class", "define", "object", "struct"],
    correctAnswer: "class"
  },
  {
    id: "py6",
    question: "Which method adds an item to a list?",
    options: ["add()", "append()", "insert()", "push()"],
    correctAnswer: "append()"
  },
  {
    id: "py7",
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "final", "error"],
    correctAnswer: "try"
  },
  {
    id: "py8",
    question: "Which operator is used for exponentiation?",
    options: ["^", "**", "//", "%"],
    correctAnswer: "**"
  },
  {
    id: "py9",
    question: "Which data structure uses key-value pairs?",
    options: ["list", "tuple", "dictionary", "set"],
    correctAnswer: "dictionary"
  },
  {
    id: "py10",
    question: "Which loop is used to iterate over a sequence?",
    options: ["for", "while", "loop", "iterate"],
    correctAnswer: "for"
  }
    ]
}

export const pythonQuiz = createSlice({
    name: "python",
    initialState,
    reducers: {

    }
})

export default pythonQuiz.reducer