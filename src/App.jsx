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

  const [notes, setnotes] = useState(JSON.parse(localStorage.notes)||[]);
  // const [notes, setnotes] = useState([]);
  const [activeNote,setActiveNote]=useState(false);
  
  //For local Storage
  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);

  const onaddnotes = () => {
    let cdate = new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes();

  const newnote = {
      id: uuidv4(),
      title: "Untitiled note",
      body: "",
      lastdateM: cdate,
      favorite:false,
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

  //This fav for favrate button to click and make favrate
  const [favValue,setFavrate]=useState();
  const [searchText,setSearchText]=useState('');

  //this fav to see seleted favrate notes
  const [FValue,setFValue]=useState(false);
  const handleFavList=(value)=>{
      if(value==true){
        setFValue=true;
      }
  }
  // const [TemNotes,setTemNotes]=useState(notes);

  // if(searchText=='')
  // {
  //    if(FValue==true)
  //    {
  //     setTemNotes(notes.filter((note)=>note.favorite==true));
  //    }
  // }
  // else
  // {
  //     setTemNotes(notes.filter((note)=>note.title.toLowerCase().includes(searchText)));
  // }

  return (
    <div>
      {/* <GlobalProvider> */}
        <div className='App'>
          <div className='app-sidebar'>
            <SideBar notes={notes} onaddnotes={onaddnotes} handleFavList={handleFavList} deletenote={deletenote} favValue={favValue}  setFavrate={setFavrate}/>
          </div>
          <div className="app-main">
            <Mainfield notes={notes.filter((note)=>note.title.toLowerCase().includes(searchText))} handleSearchNote={setSearchText} deletenote={deletenote} activeNote={activeNote} setActiveNote={setActiveNote} CurrentactiveNote={getActiveNote()} getUpdatedNote={getUpdatedNote} favrate={favValue} />
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
