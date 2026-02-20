import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './Components/Dashboard.jsx'
import RootLayout from './Layout/RootLayout.jsx'
import "./index.css";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {index: true, element: <Dashboard />}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


