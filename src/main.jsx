import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './Components/Dashboard.jsx'
import RootLayout from './Layout/RootLayout.jsx'
import "./index.css";
import Notes from './Components/Courses/Notes.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {index: true, element: <Dashboard />},
      {path: "Courses", element: <Notes />}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


