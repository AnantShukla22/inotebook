import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial =
        [
            {
                "_id": "634bc6460243c0005ba31b87",
                "user": "634a6cf6ea3f5541444fd741",
                "title": "my title",
                "tag": "general",
                "description": "wake up early",
                "date": "2022-10-16T08:52:22.112Z",
                "__v": 0
            },
            {
                "_id": "634bc68b0243c0005ba31b89",
                "user": "634a6cf6ea3f5541444fd741",
                "title": "my title",
                "tag": "general",
                "description": "wake up early",
                "date": "2022-10-16T08:53:31.629Z",
                "__v": 0
            },
            {
                "_id": "634bc68c0243c0005ba31b8b",
                "user": "634a6cf6ea3f5541444fd741",
                "title": "my title",
                "tag": "general",
                "description": "wake up early",
                "date": "2022-10-16T08:53:32.056Z",
                "__v": 0
            },
            {
                "_id": "634bc68c0243c0005ba31b8d",
                "user": "634a6cf6ea3f5541444fd741",
                "title": "my title",
                "tag": "general",
                "description": "wake up early",
                "date": "2022-10-16T08:53:32.305Z",
                "__v": 0
            }
        ]

    const [notes, setNotes] = useState(notesInitial);

    // add a note

    // delete a note

    // edit a note

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;