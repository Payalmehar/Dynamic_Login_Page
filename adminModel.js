const mongoose = require('mongoose');

const AdminModels = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password: String
})

const AdminSchema = mongoose.model("admin", AdminModels)

module.exports = AdminSchema;