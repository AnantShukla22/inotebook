// its gives notes of the user which is already loggedin - mave to import notes model

const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser")
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


//route 1- get all the notes using GET /auth/fetchNotes - login required

router.get('/fetchNotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes)

})

//route 2 add a new note using POST /auth/addNote - login required

router.post('/addNotes', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be fo 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const {title,description,tag}=req.body;
         const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const note= new Note({
        title,description,tag,user: req.user.id
    })
    const savedNote = await note.save()
    res.json(savedNote)

    } catch (error) {
        console.log(error.message)
            res.send("internal server error")
    }
})

module.exports = router
