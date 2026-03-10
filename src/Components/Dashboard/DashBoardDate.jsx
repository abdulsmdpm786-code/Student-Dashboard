import React from 'react'

function DashBoardDate() {
    const date = new Date()  
    const options = { weekday: 'long', month: 'long', day: 'numeric' , year: 'numeric'};
    const newDate = date.toLocaleDateString('en-Us', options)
console.log(newDate);

    
  return (
    <>

         <h1 className="text-sm font-thin">
                      
                      {newDate}
                    </h1>

    </>
  )
}

export default DashBoardDate