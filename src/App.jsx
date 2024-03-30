import { useState } from 'react'
// import uuid from 'uuid'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './Componets/SideBar'
import NotesList from './Componets/NotesLists'
import FavoritesNotes from './Componets/FavoritesNotes'
import Trash from './Componets/Trash'
import Mainfield from './Componets/Mainfield'
import { GlobalProvider } from '../src/Global/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
function App() {

  const [notes, setnotes] = useState([]);
  const [activeNote,setActiveNote]=useState(false);
  const onaddnotes = () => {
    let cdate = new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes();

  const newnote = {
      id: uuidv4(),
      title: "Untitiled note",
      body: "",
      lastdateM: cdate,
    }

    setnotes([newnote, ...notes]);
    console.log("Add note");
  }

  const deletenote = (deletedId) => {
    setnotes(notes.filter((note) => note.id != deletedId));
    console.log("Delete note");
  }
  
  const getUpdatedNote=(updatenote)=>{
     const getCUpdateNote = notes.map((note)=>{
             if(note.id==activeNote)
             {
              return updatenote;
             }
             return note;
          });

    setnotes(getCUpdateNote);
    
  }

  const getActiveNote=()=>{
    return notes.find((note)=>note.id == activeNote)
  };


  return (
    <div>
      {/* <GlobalProvider> */}
        <div className='App'>
          <div className='app-sidebar'>
            <SideBar notes={notes} onaddnotes={onaddnotes} deletenote={deletenote}  />
          </div>
          <div className="app-main">
            <Mainfield notes={notes} deletenote={deletenote} activeNote={activeNote} setActiveNote={setActiveNote} CurrentactiveNote={getActiveNote()} getUpdatedNote={getUpdatedNote}/>
          </div>
        </div>
      {/* </GlobalProvider> */}
      {/* <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/quick_notes" element={<NotesList/>}/>
        <Route path="/" element={<NotesList/>}/>
        <Route path="/favorties" element={<FavoritesNotes/>}/>
        <Route path="/trash" element={<Trash/>}/>
      </Routes>
      </BrowserRouter> */}

    </div>
  )
}

export default App;
