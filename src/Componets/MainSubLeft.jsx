import React from 'react'
import '../Css/MainSubLeft.css'
import { json } from 'react-router-dom'


const mainSubleft = ({ notes, deletenote, activeNoteL, setActiveNote }) => {

  return (
    <div className='notesList'>
      <input className='SearchField' type="text" placeholder='Search Notes' />
      {
        notes.map((note) => (
          <div key={note.id} className={`app-sidebar-notes ${note.id === activeNoteL && "active"}`} onClick={() => setActiveNote(note.id)} >
            <div className={"app-sidebar-note "}>
              <div className='sidebar-note-title'>
                <strong>{note.title && note.title.substr(0, 15) + "..."}</strong>
                <button className='deleteBtn' onClick={() => { deletenote(note.id) }}>Delete</button>
                <button className='downloadBtn'
                  onClick={() => {
                    // Download code
                    const jsondata=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(note.body))}`
                    const link=document.createElement('a');
                    link.href=jsondata
                    link.download=`${note.title}.txt`;
                    link.click();
                  }}
                >Download</button>
              </div>

              <p>{note.body && note.body.substr(0, 15) + "..."}</p>

              <small>date-time : {note.lastdateM}</small>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default mainSubleft