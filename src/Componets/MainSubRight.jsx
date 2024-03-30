import React, { useState } from 'react'
import '../Css/MainSubRight.css'
const mainSubRight = () => {
   const [notetitile,setNoteTitile]=useState("");
   const [noteBody,setNoteBody]=useState("");
   
  return (

    // <div className="newPageHeading">
    //    <h1>CREATE NOTE</h1>
    //    <p>
    //     <span>CTRL</span>+<span>ALT</span>+<span>N</span>
    //    </p>
    // </div>
    
    <div>
      <div className='ShowData'>
       <h5 className='notetitle' value={notetitile}>Titile</h5>
       <p class='noteBody'value={noteBody} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate veritatis pariatur aperiam totam, quos eveniet! Perferendis velit quas voluptatem veritatis suscipit quo, architecto ad, aut dolorem aliquam dolore alias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure obcaecati excepturi vero eligendi qui atque assumenda sint illo fugiat, sapiente voluptatibus eveniet quam debitis ab nesciunt, alias, deleniti ratione rem.
       Necessitatibus, officiis consequuntur. Vero temporibus magnam minima quasi dignissimos? Blanditiis explicabo, numquam id illo quisquam, voluptas ducimus, perspiciatis eveniet iure porro debitis qui vitae voluptatum tenetur enim! Quod, fuga sit.
       Dolor molestiae reprehenderit facilis officia nisi ut doloremque odit pariatur sapiente optio? Mollitia neque minima id quis enim dolor, et non facere, veritatis consequatur maxime officiis voluptatibus atque soluta doloribus.
       Iure, omnis repudiandae consequatur libero possimus aspernatur recusandae fugiat, asperiores fugit labore dolor cumque corrupti consectetur tempore nihil? Alias repellendus vero laboriosam reiciendis temporibus ut maiores cum soluta quo dolore! </p>
    </div>
    <div className='noteEnteryField'>
      <form onSubmit={()=>{}}>
      <input type="text" className='noteEntrytitle' onChange={(e)=>{setNoteTitile(e.target.value)}} /><br/>
      <textarea name="" className="noteEntryBody" cols="70" rows="20" onChange={(e)=>{setNoteBody(e.target.value)}} ></textarea>
      <button type='submit' class="SubmitBtn">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default mainSubRight
