const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors());

MONGO_URL = 'mongodb://localhost:27017/form';
mongoose.connect(MONGO_URL, {useNewUrlParser: true});

//routes
const dataRouter = require('./routes/dataRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/data', dataRouter);

const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
