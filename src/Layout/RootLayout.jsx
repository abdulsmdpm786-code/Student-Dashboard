import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";

function RootLayout() {
  return (
    <div className="flex flex-col h-screen    bg-slate-300">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <main className="flex-1 h-screen pt-10 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;


