import React from 'react'
import '../Css/MainSubLeft.css'
const mainSubleft = ({notes,deletenote}) => {
  return (
    <div> 
      <input className='SearchField' type="text" placeholder='Search Notes' />
      {
        notes.map((note)=>(
              <div key={note.id}  className='app-sidebar-notes' >
              <div className='app-sidebar-note'>
                <div className='sidebar-note-title'>
                  <strong>{note.title}</strong>
                  <button onClick={() => {deletenote(note.id)}}>delete</button>           
                </div>
      
                <p>{note.body}</p>
      
               <small>date-time : {note.lastdateM}</small>
              </div>
            </div>
        ))
      }

    </div>
  )
}

export default mainSubleft