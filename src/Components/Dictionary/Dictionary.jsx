import React, { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";

function Dictionary() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isData, setIsData] = useState(false)

  const fetchWord = async () => {
    if (!value || value.trim() === "") {
      console.log("Input is empty, stopping API call.");
      return; 
    }

    try {
      const result = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`,
      );
      setData(result.data[0]);
      setIsData(true)
    } catch (error) {}
    setValue("");
  };

  console.log(data);


  const { meanings = [] } = data || {};
  const [firstItem, secondItem] = meanings;

  return (


    
    <div className="mt-20 px-3 ">
      <div className="sm:flex  gap-2 ">
        <input
          type="text"
          className="p-5 w-72 h-10 text-lg border-2 border-blue-900 bg-slate-300 rounded-lg outline-none"
          onChange={(val) => setValue(val.target.value)}
          value={value}
          placeholder="Search Here...."
        />
        <Search
          onClick={() => fetchWord()}
          className="bg-blue-800 text-white h-10 w-72 sm:w-12 p-2 rounded-lg cursor-default mt-2  sm:mt-0 "
        />
      </div>

{ isData && 
      <div className="p-5 bg-gradient-to-r from-blue-700 to-indigo-800  mt-5 rounded-lg">
        <div className="p-2 text-white font-bold text-2xl ">
          <h1>{data.word}</h1>
          <h1>Phonetics: {data.phonetic}</h1>
        </div>
        <div>
          <div className="p-2 mt-3 border border-white rounded-sm text-white font-medium ">
            <h1 className="text-white font-bold text-2xl">Parts Of Speech</h1>
            <h1>({firstItem?.partOfSpeech})</h1>
            <div className="mt-2">
              {firstItem?.definitions?.map((data, index) => (
                <h1 key={index}>{data.definition}</h1>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 mt-3 border border-white rounded-sm text-white font-medium ">
          <h1 className="text-white font-bold text-2xl">Parts Of Speech</h1>
          <h1>({secondItem?.partOfSpeech})</h1>

          {secondItem?.definitions?.map((data, index) => (
            <div key={index} className="mt-2">
              <h1>{data?.definition}</h1>
              <h1 className="text-slate-200 font-light text-sm">
                {data?.example}
              </h1>
            </div>
          ))}
        </div>
        <div className="p-2 mt-3 border border-white rounded-sm text-white font-medium">
          <h1 className="text-white font-bold text-2xl">synonyms</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {secondItem?.synonyms?.map((data, index) => (
              <h1 key={index}>{data},</h1>
            ))}
          </div>
        </div>
      </div>}


    </div>
  );
}

export default Dictionary;
