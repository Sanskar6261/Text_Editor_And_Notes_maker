import React, { useState } from 'react'
import '../Css/MainSubRight.css'
const mainSubRight = ({ activeNote, activeNoteR, getUpdatedNote }) => {
  //  const [notetitile,setNoteTitile]=useState("");
  //  const [noteBody,setNoteBody]=useState("");

  const onEditField = (key, value) => {
    getUpdatedNote({
      ...activeNote,
      [key]: value,
      date: new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes(),
    })
  }

  // Conditions 
  if (!activeNote) return (
    <div className="newPageHeading">
      <h1>CREATE NOTE</h1>
      <p>
        <span>CTRL</span>+<span>ALT</span>+<span>N</span>
      </p>
    </div>
  );

  // if(CactiveNote.title==null) return(
  //   <div className="newPageHeading">
  //   <h1>CREATE</h1>
  // </div>
  // )

  return (
    <div>
      {/* Preview Data */}
      <div className='ShowData'>
        <h5 className='notetitle'><u>{activeNote.title}</u></h5>
        <div className='noteBody'>{activeNote.body}</div>
      </div>
      
       {/* Enter data by user */}
      <div className='noteEnteryField'>
        <input type="text" className="noteEntrytitle" value={activeNote.title}
          onChange={(e) => {
            onEditField("title", e.target.value)
          }}  minLength="5"/>
        <br />
        <textarea className="noteEntryBody" value={activeNote.body}
          onChange={(e) => {
            onEditField("body", e.target.value);
          }}
          placeholder='Enter your note here....' cols="70" rows="20" >
        </textarea>
        <button  className="SubmitBtn">Submit</button>
      </div>

    </div >
  )
}

export default mainSubRight
