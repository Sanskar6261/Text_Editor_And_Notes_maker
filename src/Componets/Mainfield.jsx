import "../Css/Mainfield.css";
import MainSubLeft from './MainSubLeft';
import MainSubRight from './MainSubRight';
const Mainfield = ({notes, deletenote,activeNote,setActiveNote,CurrentactiveNote,getUpdatedNote,favValue,setFavrate, trashNotes}) => {
  console.log(notes);
  return (
      <div className='MainField'>
           <div className="mainSubLeft-Field">
           <MainSubLeft notes={notes} deletenote={deletenote} activeNoteL={activeNote} setActiveNote={setActiveNote} favValue={favValue} setFavrat={setFavrate} trashNotes={trashNotes}/>
           </div>
           <div className="mainSubRight-Field">
           <MainSubRight activeNote={CurrentactiveNote} activeNoteR={activeNote} getUpdatedNote={getUpdatedNote}/>
           </div>
      </div>
  )
}

export default Mainfield
