import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [
    {
      id: 1,
      sub: "JavaScript",
      title: "JavaScript Variables and Data Types",
      document:
        "Variables in JavaScript are used to store data that can be referenced and manipulated throughout a program. In modern JavaScript (ES6 and later), variables are declared using let, const, and var. The let keyword allows block-scoped variables, meaning the variable exists only within the block where it is defined. Const is also block-scoped but cannot be reassigned after its initial value is set. However, if the value is an object or array, its internal properties can still be modified. The older var keyword is function-scoped and is generally avoided in modern development because it can cause unexpected behavior due to hoisting.\n\nJavaScript is dynamically typed, which means the data type of a variable is determined at runtime. Developers do not need to specify the type explicitly. The primary primitive data types include string (text), number (both integers and floating-point numbers), boolean (true or false), null (intentional absence of value), undefined (variable declared but not assigned), bigint (large integers), and symbol (unique identifiers). Non-primitive types include objects, arrays, and functions.\n\nType coercion is an important concept in JavaScript. The language automatically converts one data type to another in certain situations. For example, when adding a number to a string, JavaScript converts the number into a string. This behavior can sometimes produce unexpected results. Therefore, developers prefer using strict equality (===) instead of loose equality (==) to avoid implicit conversions.\n\nUnderstanding scope is also crucial. Variables declared with let and const are limited to their block, while var is limited to function scope. Hoisting is another concept where variable and function declarations are moved to the top of their scope during compilation. However, only var is initialized with undefined during hoisting, while let and const remain in a 'temporal dead zone' until declared.\n\nMastering variables and data types is essential because they form the foundation of every JavaScript application, whether you are building a simple webpage or a complex web application using frameworks like React or Node.js.",
      resources: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
        "https://javascript.info/types",
        "https://www.w3schools.com/js/js_variables.asp",
      ],
      isCompleted: false,
    },

    {
      id: 2,
      sub: "JavaScript",
      title: "JavaScript Functions and Arrow Functions",
      document:
        "Functions in JavaScript are reusable blocks of code designed to perform a specific task. They are fundamental to writing modular and maintainable programs. A function can be defined using a function declaration, function expression, or arrow function syntax. Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions, however, are not hoisted in the same way.\n\nJavaScript treats functions as first-class citizens. This means functions can be assigned to variables, passed as arguments to other functions, and returned from functions. This capability allows developers to create higher-order functions, which are functions that operate on other functions. Common examples include array methods like map(), filter(), and reduce().\n\nArrow functions, introduced in ES6, provide a shorter syntax and are widely used in modern JavaScript development. Unlike regular functions, arrow functions do not have their own 'this' binding. Instead, they inherit 'this' from their surrounding lexical scope. This makes them especially useful inside callbacks and class methods where maintaining the correct 'this' context is important.\n\nClosures are another important concept related to functions. A closure occurs when a function remembers variables from its outer scope even after the outer function has finished executing. Closures are widely used for data privacy and creating function factories.\n\nUnderstanding parameters, return values, default parameters, rest parameters, and callback functions is essential for mastering JavaScript functions. Functions are central to event handling, asynchronous programming, and building scalable applications.",
      resources: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        "https://javascript.info/function-basics",
        "https://www.w3schools.com/js/js_arrow_function.asp",
      ],
      isCompleted: false,
    },

    {
      id: 3,
      sub: "JavaScript",
      title: "JavaScript Asynchronous Programming",
      document:
        "JavaScript is single-threaded, meaning it executes one operation at a time. However, it can handle asynchronous tasks using the event loop, callbacks, Promises, and async/await. Asynchronous programming allows operations like API requests, file loading, database queries, and timers to run without blocking the main thread, ensuring a smooth user experience.\n\nInitially, asynchronous tasks were handled using callback functions. A callback is a function passed as an argument to another function and executed after a task completes. However, excessive nesting of callbacks can lead to 'callback hell,' making code difficult to read and maintain.\n\nPromises were introduced to solve this problem. A Promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, and rejected. Promises use .then() for successful execution and .catch() for handling errors. They improve readability and make chaining asynchronous operations easier.\n\nAsync/await, introduced in ES8, further simplifies asynchronous code. An async function automatically returns a Promise, and the await keyword pauses execution until the Promise resolves. This makes asynchronous code look synchronous and easier to understand. Proper error handling is done using try-catch blocks.\n\nUnderstanding the event loop, call stack, and task queue is essential to mastering asynchronous programming. This knowledge helps developers build efficient web applications, especially when working with APIs, real-time data, and backend services using Node.js.",
      resources: [
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
        "https://javascript.info/async-await",
        "https://nodejs.dev/en/learn/understanding-the-nodejs-event-loop/",
      ],
      isCompleted: false,
    },

    {
      id: 4,
      sub: "JavaScript",
      title: "JavaScript DOM Manipulation",
      document:
        "The Document Object Model (DOM) is a programming interface that represents an HTML document as a structured tree of objects. Every element, attribute, and piece of text in an HTML document becomes a node in this tree. JavaScript can interact with the DOM to dynamically update content, modify styles, add or remove elements, and respond to user interactions.\n\nTo access elements in the DOM, developers use methods such as getElementById(), getElementsByClassName(), querySelector(), and querySelectorAll(). These methods allow precise selection of elements for modification. Once selected, properties like innerText, innerHTML, and style can be changed dynamically.\n\nCreating and removing elements is another key feature of DOM manipulation. Methods such as createElement(), appendChild(), removeChild(), and replaceChild() allow developers to modify page structure in real time. This is essential for building interactive applications such as forms, dynamic lists, and dashboards.\n\nEvent handling is a major part of DOM manipulation. JavaScript can listen for user actions like clicks, key presses, mouse movements, and form submissions using addEventListener(). Understanding event propagation, including event bubbling and capturing, is important for managing complex interactions.\n\nEfficient DOM manipulation improves performance. Frequent updates can cause reflow and repaint, slowing down applications. Modern frameworks like React solve this problem using a Virtual DOM, but understanding core DOM manipulation remains essential for every web developer.",
      resources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        "https://javascript.info/dom-nodes",
        "https://www.w3schools.com/js/js_htmldom.asp",
      ],
      isCompleted: false,
    },

    // ===================== PYTHON =====================

    {
      id: 5,
      sub: "Python",
      title: "Python Variables and Data Types",
      document:
        "Python is a dynamically typed and high-level programming language designed for readability and simplicity. Variables in Python are created when you assign a value using the equals sign (=). Unlike statically typed languages, you do not need to declare the data type explicitly. The interpreter automatically determines the type at runtime.\n\nPython supports several built-in data types. Numeric types include int, float, and complex. Text is represented using the str type. Boolean values are represented by True and False. Python also provides collection types such as list, tuple, set, and dictionary. Lists are ordered and mutable, meaning their contents can change. Tuples are ordered but immutable. Sets store unique elements, and dictionaries store key-value pairs.\n\nOne important concept in Python is mutability. Mutable objects like lists can be modified after creation, while immutable objects like strings and tuples cannot. This affects memory management and program behavior.\n\nPython is strongly typed, meaning it does not automatically convert incompatible types. Type conversion must be done explicitly using functions like int(), float(), and str(). Understanding variables and data types is fundamental because they form the building blocks for data manipulation, logic creation, and program development in Python.",
      resources: [
        "https://docs.python.org/3/tutorial/introduction.html",
        "https://realpython.com/python-data-types/",
        "https://www.w3schools.com/python/python_variables.asp",
      ],
      isCompleted: false,
    },

    {
      id: 6,
      sub: "Python",
      title: "Python Functions and Lambda Expressions",
      document:
        "Functions in Python are defined using the 'def' keyword followed by the function name and parentheses. Functions allow developers to organize code into reusable blocks, improving modularity and readability. A function can accept parameters and return values using the return statement.\n\nPython supports different types of arguments, including positional arguments, keyword arguments, default arguments, and variable-length arguments using *args and **kwargs. This flexibility allows functions to handle a wide range of input scenarios.\n\nLambda functions are small anonymous functions defined using the 'lambda' keyword. They are typically used for short operations and are often combined with higher-order functions such as map(), filter(), and sorted(). Although lambda functions are concise, they are limited to a single expression.\n\nFunctions in Python are first-class objects, meaning they can be assigned to variables, stored in data structures, and passed as arguments to other functions. This enables functional programming techniques.\n\nUnderstanding recursion, scope (local vs global variables), and decorators further enhances function usage. Functions play a critical role in structuring large applications, improving code maintainability, and promoting clean software design.",
      resources: [
        "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
        "https://realpython.com/python-lambda/",
        "https://www.w3schools.com/python/python_functions.asp",
      ],
      isCompleted: false,
    },

    {
      id: 7,
      sub: "Python",
      title: "Python Object-Oriented Programming",
      document:
        "Object-Oriented Programming (OOP) in Python allows developers to structure programs using classes and objects. A class acts as a blueprint for creating objects, while an object is an instance of a class containing attributes and methods.\n\nPython implements key OOP principles: encapsulation, inheritance, polymorphism, and abstraction. Encapsulation restricts direct access to object data by using private variables and methods. Inheritance allows a class to inherit properties and methods from another class, promoting code reuse. Polymorphism allows methods to behave differently depending on the object that calls them. Abstraction hides complex implementation details and exposes only essential features.\n\nThe __init__ method acts as a constructor and initializes object attributes when an object is created. Python also supports special methods like __str__ for string representation.\n\nOOP improves code organization, reusability, and scalability. It is widely used in frameworks like Django and Flask and in building large-scale applications.",
      resources: [
        "https://docs.python.org/3/tutorial/classes.html",
        "https://realpython.com/python3-object-oriented-programming/",
        "https://www.w3schools.com/python/python_classes.asp",
      ],
      isCompleted: false,
    },

    {
      id: 8,
      sub: "Python",
      title: "Python File Handling and Exception Handling",
      document:
        "File handling in Python allows programs to read from and write to files stored on a computer. The open() function is used to open files in different modes such as 'r' for reading, 'w' for writing, and 'a' for appending. Using the 'with' statement ensures that files are properly closed after operations are completed.\n\nReading files can be done using methods like read(), readline(), and readlines(). Writing to files is done using write() and writelines(). Proper file handling is essential for data persistence.\n\nException handling ensures that programs handle errors gracefully without crashing. Python uses try, except, else, and finally blocks. Common exceptions include ValueError, TypeError, and FileNotFoundError.\n\nDevelopers can also create custom exceptions by extending the Exception class. Proper error handling improves reliability, maintainability, and user experience in real-world applications.",
      resources: [
        "https://docs.python.org/3/tutorial/inputoutput.html",
        "https://realpython.com/python-exceptions/",
        "https://www.w3schools.com/python/python_file_handling.asp",
      ],
      isCompleted: false,
    },

    // ===================== JAVA =====================

    {
      id: 9,
      sub: "Java",
      title: "Java Variables and Data Types",
      document:
        "Java is a statically typed programming language, meaning every variable must be declared with a specific data type before use. Primitive data types in Java include int, double, float, char, byte, short, long, and boolean. These types store simple values directly in memory.\n\nReference types include classes, arrays, and interfaces. Unlike primitive types, reference variables store memory addresses pointing to objects.\n\nJava enforces strong type checking at compile time, reducing runtime errors. Type casting can be implicit (automatic widening) or explicit (manual narrowing).\n\nThe final keyword can be used to declare constants. Understanding variable scope (local, instance, static) is also important for writing efficient programs.\n\nJava's strict typing improves reliability and performance, making it suitable for large-scale enterprise applications.",
      resources: [
        "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
        "https://www.geeksforgeeks.org/data-types-in-java/",
        "https://www.w3schools.com/java/java_variables.asp",
      ],
      isCompleted: false,
    },

    {
      id: 10,
      sub: "Java",
      title: "Java Object-Oriented Programming Concepts",
      document:
        "Java is fundamentally object-oriented. A class defines properties (variables) and behaviors (methods), while objects represent real-world entities.\n\nEncapsulation is achieved by making variables private and providing public getter and setter methods. Inheritance allows one class to extend another using the 'extends' keyword. Polymorphism enables method overriding and overloading, allowing flexible behavior. Abstraction is implemented using abstract classes and interfaces.\n\nConstructors initialize objects, and access modifiers such as public, private, and protected control visibility.\n\nOOP in Java promotes modularity, code reuse, and maintainability, which are essential in enterprise software development.",
      resources: [
        "https://docs.oracle.com/javase/tutorial/java/concepts/",
        "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
        "https://www.w3schools.com/java/java_oop.asp",
      ],
      isCompleted: false,
    },

    {
      id: 11,
      sub: "Java",
      title: "Java Exception Handling",
      document:
        "Exception handling in Java is used to manage runtime errors and maintain normal program flow. Java uses try, catch, and finally blocks to handle exceptions.\n\nJava differentiates between checked and unchecked exceptions. Checked exceptions must be handled or declared using the 'throws' keyword, while unchecked exceptions occur at runtime.\n\nCommon exceptions include IOException, ArithmeticException, and NullPointerException. Developers can create custom exceptions by extending the Exception class.\n\nProper exception handling prevents crashes and ensures stable applications. It also helps in debugging and maintaining large codebases.",
      resources: [
        "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
        "https://www.geeksforgeeks.org/exceptions-in-java/",
        "https://www.w3schools.com/java/java_try_catch.asp",
      ],
      isCompleted: false,
    },

    {
      id: 12,
      sub: "Java",
      title: "Java Collections Framework",
      document:
        "The Java Collections Framework provides a set of classes and interfaces for storing and manipulating groups of objects efficiently. Key interfaces include List, Set, and Map.\n\nCommon implementations include ArrayList, LinkedList, HashSet, and HashMap. Lists maintain order, Sets ensure uniqueness, and Maps store key-value pairs.\n\nGenerics provide type safety and prevent runtime errors. Iterators allow traversal of collections. The Stream API enables functional-style operations like filtering and mapping.\n\nUnderstanding collections is crucial for handling data efficiently in Java applications, especially in enterprise and backend development.",
      resources: [
        "https://docs.oracle.com/javase/tutorial/collections/",
        "https://www.geeksforgeeks.org/collections-in-java-2/",
        "https://www.w3schools.com/java/java_arraylist.asp",
      ],
      isCompleted: false,
    },
  ],
};
 const DataSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    toggleComplete: (state, action)=>{
      const noteId = action.payload
      const noteArray = state.allNotes.find(note => note.id === noteId)
      
      
      if (noteArray) {
    noteArray.isCompleted = !noteArray.isCompleted;
  }
      
    }
  },
});
export const {toggleComplete} = DataSlice.actions
export default DataSlice.reducer;
