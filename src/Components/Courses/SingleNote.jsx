import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"


function SingleNote() {

  const params = useParams()

  const {noteId} = params

  const singleNote = useSelector((state)=> state.notes.allNotes)
  console.log("here",singleNote);
  
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default SingleNote