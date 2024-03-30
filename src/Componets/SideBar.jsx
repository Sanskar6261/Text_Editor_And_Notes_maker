import React from 'react'
import "../Css/SideBar.css"
import { Link } from 'react-router-dom'

const SideBar = ({notes,onaddnotes,deletenote}) => {
  return (
       <div className='sideBar'>
       <div className='btnAndHeading'>
       <button className='btn' onClick={onaddnotes}>+</button>
       <label className='Heading'> New Note</label>
       </div>
       <div className='menuButton' >
        <ul>
          <li>
            {/* <Link to="/quick_notes"> */}
            <i className="fa-sharp fa-solid fa-bars-staggered menuButtonIcon"></i>
             QUICK NOTES
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/"> */}
            <i className="fa-regular fa-file menuButtonIcon"></i>
             ALL NOTES
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/favorties"> */}
            <i className="fa-regular fa-bookmark menuButtonIcon"></i>
            FAVORITES
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/trash"> */}
            <i className="fa-sharp fa-solid fa-trash menuButtonIcon"></i>
              TRASH
            {/* </Link> */}
          </li>
        </ul>
       <hr/>
       <ul>
         <li>
         <button className='CategoriesBtn'>
         <i className="fa-regular fa-square-plus CategoriesBtnIcon" ></i>
         CATEGORIES      
         <i className="fa-solid fa-chevron-down CategoriesBtnIcon"></i>
         </button>
         </li>
       </ul>
       
    </div>
    </div>)}    

export default SideBar;
