

// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Note ({id, text, editHandler, deleteHandler}){
    return (
      <div className='note'>
          <div className='note-body'>{text}</div>
          <div className='note_footer' style={{justifyContent : "flex-end"}}>
          <button className='note_saveB' onClick={() => deleteHandler(id)}>Delete</button> &nbsp;
          <button className='note_saveB' onClick={() => editHandler(id, text)}>Edit</button>
          </div>
      </div>
    )
  }
  
  export default Note
