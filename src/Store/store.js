import {configureStore} from '@reduxjs/toolkit';
import  DataSlice  from './Slice/DataSlice';
import categoryUpdate from './Slice/fromSlice'
// import progressBar from "./Slice/progressBar"
import  javaScriptQuiz  from './Slice/quizSlice';
import  pythonQuiz  from './Slice/pythonSlice';
import  java  from './Slice/javaSlice';
import  quizQuestion  from './Slice/QuizSection';
import menuSlice from './Slice/menuSlice'
 
export const store = configureStore({
    reducer: {
        notes: DataSlice,
        Note: categoryUpdate,
        // Progress: progressBar
        quizzes: quizQuestion,
        Menu: menuSlice




    }
})