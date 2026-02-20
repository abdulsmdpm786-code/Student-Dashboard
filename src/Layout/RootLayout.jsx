import React from 'react'
import {Outlet} from "react-router-dom"
import SideNav from '../Components/SideNav'

function RootLayout() {
  return (
    <div className='flex'>

        <SideNav />
        <main className='flex-1 bg-slate-300'>
            <Outlet />
        </main>
    
    </div>
  )
}

export default RootLayout