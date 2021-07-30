const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    fileName: String,
  });

module.exports = mongoose.model("Data", dataSchema)
