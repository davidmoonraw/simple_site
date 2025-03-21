const path = require("node:path");
const express = require('express');
const router = express.Router();
const Form = require('../models/form.js');
const multer = require('multer');

// Set up multer storage (optional, but good practice to specify a destination for uploads)
const storage = multer.memoryStorage(); // or use diskStorage to save files to disk
const upload = multer({ storage: storage }); //bodyParser does not handle multipart content

router.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

router.post('/form',upload.any(), async (req, res) => {
    try {
        const { email, text } = req.body;
        const form = new Form({ email: email, text: text });
        await form.save().then(() => console.log('New message submitted!!'));
        res.sendFile(path.join(__dirname,"../public/success.html"));
    }
    catch (e) {
        console.log('--error--', e);
        res.sendFile(path.join(__dirname,"../public/success.html"));
    }
});
module.exports = router;