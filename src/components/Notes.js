import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import  NoteItem from './Noteitem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context
    return (
            <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem note={note._id} />;
                    // return note.title
                    
                })}
            </div>
    )
}

export default Notes