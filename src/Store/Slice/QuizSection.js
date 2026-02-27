import { createSlice } from "@reduxjs/toolkit";
import java from "../../assets/Quiz/java.png";
import javaScript from "../../assets/Quiz/JavaScript.webp";
import python from "../../assets/Quiz/python.png";

const initialState = {
  allQuizzes: [
    {
      id: "javaScript",
      image: javaScript,
      title: "javaScript Questions",
      questions: [
        {
          id: "js1",
          question: "Which keyword is used to declare a block-scoped variable?",
          options: ["var", "let", "const", "define"],
          correctAnswer: "let",
        },
        {
          id: "js2",
          question: "Which method converts JSON data into a JavaScript object?",
          options: ["parse()", "stringify()", "convert()", "toObject()"],
          correctAnswer: "parse()",
        },
        {
          id: "js3",
          question: "Which symbol is used for strict equality comparison?",
          options: ["==", "===", "!=", "="],
          correctAnswer: "===",
        },
        {
          id: "js4",
          question: "Which function is used to print output in the console?",
          options: ["print()", "console.log()", "echo()", "write()"],
          correctAnswer: "console.log()",
        },
        {
          id: "js5",
          question: "Which keyword is used to define a constant variable?",
          options: ["let", "var", "const", "static"],
          correctAnswer: "const",
        },
        {
          id: "js6",
          question: "Which method adds an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "concat()"],
          correctAnswer: "push()",
        },
        {
          id: "js7",
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Netscape", "Google", "Oracle"],
          correctAnswer: "Netscape",
        },
        {
          id: "js8",
          question: "Which keyword is used to create a class in ES6?",
          options: ["function", "object", "class", "define"],
          correctAnswer: "class",
        },
        {
          id: "js9",
          question: "Which method removes the last element of an array?",
          options: ["pop()", "push()", "shift()", "slice()"],
          correctAnswer: "pop()",
        },
        {
          id: "js10",
          question: "Which loop is guaranteed to run at least once?",
          options: ["for", "while", "do-while", "foreach"],
          correctAnswer: "do-while",
        },
      ],
    },

    {
      id: "Python",
      image: python,
      title: "Python questions",
      questions: [
        {
          id: "py1",
          question: "Which keyword is used to define a function in Python?",
          options: ["function", "def", "func", "define"],
          correctAnswer: "def",
        },
        {
          id: "py2",
          question: "Which data type is used to store True or False values?",
          options: ["int", "bool", "str", "float"],
          correctAnswer: "bool",
        },
        {
          id: "py3",
          question: "Which symbol is used for comments in Python?",
          options: ["//", "#", "/*", "--"],
          correctAnswer: "#",
        },
        {
          id: "py4",
          question: "Which function is used to display output?",
          options: ["echo()", "print()", "log()", "display()"],
          correctAnswer: "print()",
        },
        {
          id: "py5",
          question: "Which keyword is used to create a class?",
          options: ["class", "define", "object", "struct"],
          correctAnswer: "class",
        },
        {
          id: "py6",
          question: "Which method adds an item to a list?",
          options: ["add()", "append()", "insert()", "push()"],
          correctAnswer: "append()",
        },
        {
          id: "py7",
          question: "Which keyword is used for exception handling?",
          options: ["try", "catch", "final", "error"],
          correctAnswer: "try",
        },
        {
          id: "py8",
          question: "Which operator is used for exponentiation?",
          options: ["^", "**", "//", "%"],
          correctAnswer: "**",
        },
        {
          id: "py9",
          question: "Which data structure uses key-value pairs?",
          options: ["list", "tuple", "dictionary", "set"],
          correctAnswer: "dictionary",
        },
        {
          id: "py10",
          question: "Which loop is used to iterate over a sequence?",
          options: ["for", "while", "loop", "iterate"],
          correctAnswer: "for",
        },
      ],
    },
    {
      id: "java",
      image: java,
      title: "Java Questions",
      questions: [
        {
          id: "java1",
          question: "Which keyword is used to define a class in Java?",
          options: ["function", "class", "define", "struct"],
          correctAnswer: "class",
        },
        {
          id: "java2",
          question: "Which method is the entry point of a Java program?",
          options: ["start()", "main()", "run()", "init()"],
          correctAnswer: "main()",
        },
        {
          id: "java3",
          question: "Which keyword is used to inherit a class?",
          options: ["implements", "extends", "inherits", "super"],
          correctAnswer: "extends",
        },
        {
          id: "java4",
          question: "Which data type is used to store whole numbers?",
          options: ["float", "double", "int", "char"],
          correctAnswer: "int",
        },
        {
          id: "java5",
          question: "Which keyword is used to create an object?",
          options: ["create", "new", "object", "make"],
          correctAnswer: "new",
        },
        {
          id: "java6",
          question: "Which keyword is used to prevent inheritance?",
          options: ["static", "final", "const", "private"],
          correctAnswer: "final",
        },
        {
          id: "java7",
          question: "Which loop checks the condition before execution?",
          options: ["do-while", "for", "while", "foreach"],
          correctAnswer: "while",
        },
        {
          id: "java8",
          question: "Which package contains Scanner class?",
          options: ["java.io", "java.util", "java.lang", "java.net"],
          correctAnswer: "java.util",
        },
        {
          id: "java9",
          question: "Which keyword is used for exception handling?",
          options: ["try", "catch", "throw", "finally"],
          correctAnswer: "try",
        },
        {
          id: "java10",
          question: "Which concept allows multiple methods with the same name?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
          ],
          correctAnswer: "Polymorphism",
        },
      ],
    },
  ],
};

export const quizQuestion = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
});

export default quizQuestion.reducer;
