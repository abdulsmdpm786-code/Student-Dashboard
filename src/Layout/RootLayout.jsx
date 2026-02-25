import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col h-full    bg-slate-300">
      <Navbar />
      <div className="xl:ml-64 flex flex-1 ">
        <SideNav />
        <main className="flex-1 h-full w-full bg-slate-300 pt-10  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;


