const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const jwt = require("jsonwebtoken")
var fetchuser = require("../middleware/fetchuser")
const JWT_SCERET = 'anantisagoodboy'


//route 1- create a user (auth/createUser)- no login required
router.post('/createUser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'enter a valid password').isLength({ min: 5 })],
    async (req, res) => {
        // if there r errors then return the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check whether user with this email exists or not
        try {
            let user = await User.findOne({ email: req.body.email })
            console.log(user)

            if (user) {
                return res.status(400).json({ error: 'sorry a user with this email already exists' })
            }

            const secPass = await bcrypt.hash(req.body.password, saltRounds)
            // create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })

            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, JWT_SCERET)
            res.json({ authToken })

        } catch (error) {
            console.log(error.message)
        }

    });

//route 2 Authenticate a user for security (auth/login)- no login required
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'password cannot be blank').exists()],
    async (req, res) => {

        // if there r errors then return the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // taking out username pass
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'please use correct credentials' })
            }

            const passCompare = await bcrypt.compare(password, user.password)
            if (!passCompare) {
                return res.status(400).json({ error: 'please use correct credentials' })
            }

            // if above correct then below works
            const data = {
                user: {
                    id: user.id
                }
            }
            //using id of user and secret key to make auth token
            const authToken = jwt.sign(data, JWT_SCERET)
            res.json({ authToken })

        } catch (error) {
            console.log(error.message)
            res.send("internal server error")
        }
    }

)

// route 3 - get loggedin details of use using (auth/getUser) - login required

// fetchuser is a function to fetch user details
router.post('/getUser', fetchuser, async (req, res) => {

    try {
         userId = req.user.id;
        // -password as take everything except password
        const user = await User.findById(userId).select("-password")
        // it contains detailsn of user
        res.send(user)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})

module.exports = router 