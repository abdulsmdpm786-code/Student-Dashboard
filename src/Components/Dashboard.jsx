import React from "react";
import "../App.css";

function Dashboard() {
  return (
    <div className="container ">
<div className="grid-container ">
      <div className="grid-container-1">
        <div className="box" style={{ gridArea: "box-1" }}>
          {" "}
          1
        </div>
        <div className="box" style={{ gridArea: "box-2" }}>
          {" "}
          2
        </div>
      </div>
      
<h1 className="text-2xl font-bold text-blue-800 mt-2">My courses</h1>
     
      
      <div className="grid-container-2">
        
        <div className="box" style={{ gridArea: "box-1" }}>
          {" "}
          2
        </div>
        <div className="box" style={{ gridArea: "box-2" }}>
          {" "}
          2
        </div>
        <div className="box" style={{ gridArea: "box-3" }}>
          {" "}
          2
        </div>


      </div>
      <h1 className="text-2xl font-bold text-blue-800 mt-2">Achievements</h1>
      <div className="grid-container-3">
        <div className="box" style={{ gridArea: "box-1" }}>
          {" "}
          2
        </div>
        <div className="box" style={{ gridArea: "box-2" }}>
          {" "}
          2
        </div>
        <div className="box" style={{ gridArea: "box-3" }}>
          {" "}
          2
        </div>

      </div>
    </div>
    </div>
    

    
  );
}

export default Dashboard;
