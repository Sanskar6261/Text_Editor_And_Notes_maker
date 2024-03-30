// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import NotesList from './Componets/NotesLists'
// import FavoritesNotes from './Componets/FavoritesNotes'
// import Trash from './Componets/Trash'
// import Main from './Componets/Main'
import "../Css/Mainfield.css";
import MainSubLeft from './MainSubLeft';
import MainSubRight from './MainSubRight';
const Mainfield = ({notes, deletenote}) => {
  return (
      <div className='MainField'>
           <div className="mainSubLeft-Field">
           <MainSubLeft notes={notes} deletenote={deletenote}/>
           </div>
           <div className="mainSubRight-Field">
           <MainSubRight/>
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
