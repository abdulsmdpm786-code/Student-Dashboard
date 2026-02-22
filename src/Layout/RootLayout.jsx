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
        <main className="flex-1  overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;


// function RootLayout() {
//   return (
//     // 1. The Screen Wrapper
//     <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      
//       {/* 2. The Top Navbar */}
//       <Navbar />
      
//       {/* 3. The Bottom Section (Sidebar + Main Content) */}
//       <div className="flex flex-1 overflow-hidden">
        
//         <SideNav />
        
//         {/* 4. The Scrollable Main Content */}
//         <main className="flex-1 overflow-y-auto p-6 md:p-8">
//           <Outlet />
//         </main>
        
//       </div>
//     </div>
//   );
// }