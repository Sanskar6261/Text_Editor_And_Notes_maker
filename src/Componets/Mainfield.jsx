// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import NotesList from './Componets/NotesLists'
// import FavoritesNotes from './Componets/FavoritesNotes'
// import Trash from './Componets/Trash'
// import Main from './Componets/Main'
import "../Css/Mainfield.css";
import MainSubLeft from './MainSubLeft';
import MainSubRight from './MainSubRight';
const Mainfield = ({notes,handleSearchNote, deletenote,activeNote,setActiveNote,CurrentactiveNote,getUpdatedNote,favValue,setFavrate}) => {
  return (
      <div className='MainField'>
           <div className="mainSubLeft-Field">
           <MainSubLeft notes={notes} handleSearchNote={handleSearchNote} deletenote={deletenote} activeNoteL={activeNote} setActiveNote={setActiveNote} favValue={favValue} setFavrat={setFavrate}/>
           </div>
           <div className="mainSubRight-Field">
           <MainSubRight activeNote={CurrentactiveNote} activeNoteR={activeNote} getUpdatedNote={getUpdatedNote}/>
           </div>
      </div>

    // <div className='app-main-field'>
    //   <div className='app-main-note-edit'>
    //      <input type="text" id='title' />
    //      <textarea id="body" cols="30" rows="10"/>
    //   </div>
    //   <div className='app-main-note-preview'>
    //     <h1 className='titile-preview'>Title</h1>
    //     <div className='details-preview'></div>
    //   </div>

        /* <BrowserRouter>
        <Routes>
            <Route path="/quick_notes" element={<NotesList/>}/>
            <Route path="/" element={<NotesList/>}/>
            <Route path="/favorties" element={<FavoritesNotes/>}/>
            <Route path="/trash" element={<Trash/>}/>
        </Routes>
        </BrowserRouter> */
    // </div>
  )
}

export default Mainfield
