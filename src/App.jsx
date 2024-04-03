import { useEffect, useState } from 'react'
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

  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  // console.log(notes);
  // const [notes, setnotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [TemNotes, setTemNotes] = useState(notes);


  //For local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onaddnotes = () => {
    let cdate = new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes();

    const newnote = {
      id: uuidv4(),
      title: "Untitiled note",
      body: "",
      lastdateM: cdate,
      favorite: false,
    }

    setnotes([newnote, ...notes]);
    console.log("Add note");
  }

  //Trash
  const [trashNotes, setTrashNotes] = useState([]);
  //delete function
  const deletenote = (deletedId) => {
    const deletedNote = notes.find((note) => note.id === deletedId);
    setTrashNotes([...trashNotes, deletedNote]);
    setnotes(notes.filter((note) => note.id !== deletedId));
    console.log("Note deleted and moved to Trash");
  }


  const getUpdatedNote = (updatenote) => {
    const getCUpdateNote = notes.map((note) => {
      if (note.id == activeNote) {
        return updatenote;
      }
      return note;
    });

    setnotes(getCUpdateNote);

  }

  const getActiveNote = () => {
    return notes.find((note) => note.id == activeNote)
  };

  //This fav for favrate button to click and make favrate
  const [favValue, setFavrate] = useState();
  function setFavrateValue(key, value) {
    // notes.find((note) => note.id == key && note.favorite=value)
  }
  // SideBar 
  const [SBvalue, setSBvalue] = useState(0);
  function CurrentSideBarValue(value) {
    setSBvalue(value);
  }

  const genNotes = () => {
    switch (SBvalue) {
      case 1:
        console.log("Q Notes");
        return notes;
      case 2:
        console.log("All notes");
        return notes;
      case 3:
        console.log("Fav");
        return notes.filter((note) => note.favorite == true)
      case 4:
        console.log("Trash");
        return trashNotes;
      default:
        console.log("default");
        return notes;
    }
  }

  // ShortCut keys for keyboard access
  const handleShortcut = (event) => {
    if (event.key === 'n' && event.ctrlKey && event.altKey) {
      onaddnotes();
      console.log("Add new file by shortCut");
    }
    if (event.key === 'f' && event.ctrlKey && event.altKey) {
      onaddnotes();
      console.log("Add fav file by shortCut");
    }
    if (event.key === 'd' && event.ctrlKey && event.altKey) {
        const jsondata = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify())}`
        const link = document.createElement('a');
        link.href = jsondata
        link.download = `Notes.txt`;
        link.click();
      console.log("Download file by shortCut");
    }
    if (event.key === 'Delete' && event.ctrlKey) {
      deletenote(activeNote);
      console.log("KEy work");
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleShortcut);
    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, [notes]);
  return (
    <div>
      <div className='App'>
        <div className='app-sidebar'>
          <SideBar CurrentSideBarValue={CurrentSideBarValue} onaddnotes={onaddnotes} />
        </div>
        <div className="app-main">
          <Mainfield notes={genNotes()} deletenote={deletenote} trashNotes={trashNotes} activeNote={activeNote} setActiveNote={setActiveNote} CurrentactiveNote={getActiveNote()} getUpdatedNote={getUpdatedNote} favrate={favValue} />
        </div>
      </div>
    </div>
  )
}

export default App;
