import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    java: [
        {
    id: "java1",
    question: "Which keyword is used to define a class in Java?",
    options: ["function", "class", "define", "struct"],
    correctAnswer: "class"
  },
  {
    id: "java2",
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    correctAnswer: "main()"
  },
  {
    id: "java3",
    question: "Which keyword is used to inherit a class?",
    options: ["implements", "extends", "inherits", "super"],
    correctAnswer: "extends"
  },
  {
    id: "java4",
    question: "Which data type is used to store whole numbers?",
    options: ["float", "double", "int", "char"],
    correctAnswer: "int"
  },
  {
    id: "java5",
    question: "Which keyword is used to create an object?",
    options: ["create", "new", "object", "make"],
    correctAnswer: "new"
  },
  {
    id: "java6",
    question: "Which keyword is used to prevent inheritance?",
    options: ["static", "final", "const", "private"],
    correctAnswer: "final"
  },
  {
    id: "java7",
    question: "Which loop checks the condition before execution?",
    options: ["do-while", "for", "while", "foreach"],
    correctAnswer: "while"
  },
  {
    id: "java8",
    question: "Which package contains Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    correctAnswer: "java.util"
  },
  {
    id: "java9",
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "throw", "finally"],
    correctAnswer: "try"
  },
  {
    id: "java10",
    question: "Which concept allows multiple methods with the same name?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    correctAnswer: "Polymorphism"
  }
    ]
}

export const javaQuiz = createSlice({
    name: "java",
    initialState,
    reducers: {

    }
})

export default javaQuiz.reducer