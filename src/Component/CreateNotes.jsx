
// eslint-disable-next-line no-unused-vars
import React from 'react'


// eslint-disable-next-line react/prop-types
function CreateNotes ({inputText, setInputText, saveHandler}){
    const char= 100;
    
    // eslint-disable-next-line react/prop-types
    const charLimit = char - inputText.length;
  return (
    <div className='note'>
        <textarea
        cols={10}
        rows={5}
        placeholder='Type...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={100}
        >
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_saveB' onClick={saveHandler}>Save</button>
        </div>
    </div>
  )
}

export default CreateNotes