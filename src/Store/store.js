import {configureStore} from '@reduxjs/toolkit';
import  DataSlice  from './Slice/DataSlice';
import categoryUpdate from './Slice/fromSlice'
// import progressBar from "./Slice/progressBar"
import  javaScriptQuiz  from './Slice/quizSlice';
import  pythonQuiz  from './Slice/pythonSlice';
import  java  from './Slice/javaSlice';

export const store = configureStore({
    reducer: {
        notes: DataSlice,
        Note: categoryUpdate,
        // Progress: progressBar
        javaScript: javaScriptQuiz,
        python: pythonQuiz,
        java: java



    }
})