import React from 'react'
import "../Css/SideBar.css"
import { Link } from 'react-router-dom'

const SideBar = ({ notes, onaddnotes , setFValue , deletenote , favValue , handleFavList}) => {
  return (
    <div className='sideBar'>

      <div className='btnAndHeading'>
        <button className='addNotebtn' onClick={onaddnotes}>+</button>
        <label className='Heading'> New Note</label>
      </div>

      <div className='menuButton sideBarMainBtn' >
        <div className="btn-group-vertical " role="group" aria-label="Vertical button group">
          <button type="button" className="btn">
            <i className="fa-sharp fa-solid fa-bars-staggered menuButtonIcon"></i>
            QUICK NOTES
          </button>
          <button type="button" className="btn ">
            <i className="fa-regular fa-file menuButtonIcon"></i>
            ALL NOTES
          </button>
          <button type="button" className="btn "  onClick={()=>{handleFavList(true)}}>
            <i className="fa-regular fa-bookmark menuButtonIcon"></i>
            FAVORITES
          </button>
          <button type="button" className="btn ">
            <i className="fa-sharp fa-solid fa-trash menuButtonIcon"></i>
            TRASH
          </button>
        </div>
        <hr />
        <button type="button" className='btn'>
          <i className="fa-regular fa-square-plus menuButtonIcon"></i>
          CATEGORIES
          <i className="fa-solid fa-chevron-down menuButtonIcon"></i>
        </button>

      </div>
    </div>)
}

export default SideBar;
