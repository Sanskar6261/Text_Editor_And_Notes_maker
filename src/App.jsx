import { useState } from 'react'
// import uuid from 'uuid'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './Componets/SideBar'
import NotesList from './Componets/NotesLists'
import FavoritesNotes from './Componets/FavoritesNotes'
import Trash from './Componets/Trash'
import Mainfield from './Componets/Mainfield'
import { GlobalProvider } from '../src/Global/GlobalState';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [notes, setnotes] = useState([]);

  const onaddnotes = () => {
    let cdate = new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes();

    const newnote = {
      id: uuidv4(),
      title: "untitiled note",
      body: "body",
      lastdateM: cdate,
    }

    setnotes([newnote, ...notes]);
    // console.log("ABHAY");
  }

  let deletenote = (deletedId) => {
    setnotes(notes.filter((note) => note.id != deletedId));
    console.log("delete");
  }
  return (
    <div>
      {/* <GlobalProvider> */}
        <div className='App'>
          <div className='app-sidebar'>
            <SideBar notes={notes} onaddnotes={onaddnotes} deletenote={deletenote} />
          </div>
          <div className="app-main">
            <Mainfield notes={notes} deletenote={deletenote} />
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
