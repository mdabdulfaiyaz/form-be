const express = require('express');
const router = express.Router();
const multer  = require('multer')
const Data = require('../models/Data')

const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('file'), function(req, res) {
    const {
        name,
        email,
        mobile,
    } = req.query;

    const newData = new Data({
        name,
        email,
        mobile,
        fileName: req.file.filename
      });
    newData.save(function (err, order) {
        if (err) return console.error(err);
        res.status(201);
        res.send();
    });
});

module.exports = router;
