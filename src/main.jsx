import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './Components/Dashboard.jsx'
import RootLayout from './Layout/RootLayout.jsx'
import "./index.css";
import Notes from './Components/Courses/Notes.jsx'
import {Provider} from "react-redux"
import {store} from "./Store/store.js"
import SingleNote from './Components/Courses/SingleNote.jsx'
import QuizIntro from './Components/Quiz/QuizIntro.jsx'
import QuizPage from './Components/Quiz/QuizPage.jsx'
import Dictionary from './Components/Dictionary/Dictionary.jsx'



const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {index: true, element: <Dashboard />},
      {path: "Courses", element: <Notes />},
      {path: "Courses/:noteId", element: <SingleNote />},
      {path: "Quiz", element: <QuizIntro />},
      {path: "Quiz/:quizId", element: <QuizPage />},
      {path: "Dictionary", element: <Dictionary />}

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
 <RouterProvider router={router}/>
    </Provider>
   
  </StrictMode>,
)


