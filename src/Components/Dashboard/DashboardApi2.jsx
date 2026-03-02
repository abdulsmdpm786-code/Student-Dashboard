import axios from "axios";
import React, { useEffect, useState } from "react";

function DashboardApi2() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleApi = async () => {
    try {
      const response = await axios.get(
        "https://motivational-spark-api.vercel.app/api/quotes",
      );

      const randomNumber = Math.floor(Math.random() * response.data.length);

      setTitle(response.data[randomNumber].quote);
      setAuthor(response.data[randomNumber].author);
    } catch (error) {
      console.log("Error Found.....");
    }
  };


  useEffect(() => {
    titleApi();
  }, []);

  return (
    <>
      <p className="text-white leading-relaxed text-sm mt-2">{title}</p>
      <p className="text-slate-300 leading-relaxed text-xs text-end">-- {author}</p> 
    </>
  );
}

export default DashboardApi2;
