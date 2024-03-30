import React from 'react'
import '../Css/MainSubLeft.css'
const mainSubleft = ({notes,deletenote,activeNoteL,setActiveNote}) => {
  return (
    <div className='notesList'> 
      <input className='SearchField' type="text" placeholder='Search Notes' />
      {
        notes.map((note)=>(
              <div key={note.id}  className={`app-sidebar-notes ${note.id===activeNoteL && "active"}`} onClick={()=>setActiveNote(note.id)} >
              <div className={"app-sidebar-note "}>
                <div className='sidebar-note-title'>
                  <strong>{note.title && note.title.substr(0,15)+"..."}</strong>
                  <button className='deleteBtn' onClick={() => {deletenote(note.id)}}>Delete</button>           
                </div>
      
                <p>{note.body && note.body.substr(0,15)+"..."}</p>
      
               <small>date-time : {note.lastdateM}</small>
              </div>
            </div>
        ))
      }

    </div>
  )
}

export default mainSubleft