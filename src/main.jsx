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



const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {index: true, element: <Dashboard />},
      {path: "Courses", element: <Notes />},
      {path: "Courses/:noteId", element: <SingleNote />}
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


