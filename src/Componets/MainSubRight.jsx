import React, { useState } from 'react'
import '../Css/MainSubRight.css'
const mainSubRight = ({CactiveNote}) => {
  //  const [notetitile,setNoteTitile]=useState("");
  //  const [noteBody,setNoteBody]=useState("");
   
  return (
    // <div className="newPageHeading">
    //    <h1>CREATE NOTE</h1>
    //    <p>
    //     <span>CTRL</span>+<span>ALT</span>+<span>N</span>
    //    </p>
    // </div>
    
    <div>
      <div className='ShowData'>
       <h5 className='notetitle'>{CactiveNote.title}</h5>
       <div className='noteBody'>{CactiveNote.body}</div>
    </div>
    <div className='noteEnteryField'>
      <form>
      <input type="text" className="noteEntrytitle" value={CactiveNote.title} /><br/>
      <textarea  className="noteEntryBody" value={CactiveNote.body} placeholder='Enter your note here....' cols="70" rows="20" ></textarea>
      <button type='submit' className="SubmitBtn">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default mainSubRight
