import React, { useEffect, useState } from 'react'
import axios from "axios"

function DashboardApi() {


  const [quote ,setQuote] = useState("")

    const fetchQuote = async () => {
      try {
        const res = await axios.get("https://api.adviceslip.com/advice")
        console.log("it is",res.data.slip.advice);
        setQuote(res.data.slip.advice)
        
        
      } catch (error) {
        console.log("wrong");
        
      }
    }

    useEffect(()=> {
 fetchQuote()
    },[])
   
  return (
    <>
        {quote || "Loading Wisdom..."}
    </>
  )
}

export default DashboardApi