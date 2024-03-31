import React, { useState } from 'react'
import '../Css/MainSubLeft.css'

const mainSubleft = ({ notes,handleSearchNote, deletenote, activeNoteL, setActiveNote,favValue,setFavrate}) => {
  const Dnotes=notes.sort((note,note1)=>note1.lastdateM - note.lastdateM); 
  // if(favValue==true){
  //  Dnotes=notes.filte((note) => note.favorite != false);
  // }
  
   // 

  return (
    <div className='notesList'>
      <input className="form-control searchBtn" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."
      onChange={(e)=>{handleSearchNote(e.target.value.toLowerCase())}}
      type='text'
      />
          
                  {
                    Dnotes.map((note) => ( 
                      <div key={note.id} className={`app-sidebar-notes ${note.id === activeNoteL && "active"}`} onClick={() => setActiveNote(note.id)} >
                        <div className={"app-sidebar-note "}>
                          <div className='sidebar-note-title'>
                          {note.favorite==true && <span>(F)</span> }
                            <strong>{note.title && note.title.substr(0, 15) + "..."}</strong>

                            <div className="dropup-center dropend">
                              <button className="btn btn-secondary dropdown-toggle optionBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              </button>
                              <ul className="dropdown-menu">
                              <li>
                                  <button className="dropdown-item deleteBtn" onClick={() => {(note.favorite==false)?note.favorite=true:note.favorite=false;console.log("fav :"+note.id)}}>
                                  Favorite</button>
                              </li>
                                <li>
                                  <button className="dropdown-item deleteBtn" onClick={() => { deletenote(note.id) }}>Delete</button>
                                </li>
                                <li>
                                  <button className="dropdown-item downloadBtn"
                                    onClick={() => {
                                      // Download code
                                      const jsondata = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(note.body))}`
                                      const link = document.createElement('a');
                                      link.href = jsondata
                                      link.download = `${note.title}.txt`;
                                      link.click();
                                    }}
                                  >Download</button>
                                </li>
                              </ul>
                            </div>

                          </div>

                          <p>{note.body && note.body.substr(0, 15) + "..."}</p>

                          <small>date-time : {note.lastdateM}</small>
                        </div>
                      </div>
                    ))
                  }

          </div>
                )}

                export default mainSubleft