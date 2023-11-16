const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        min: 10,
        required: true,
    },
})

module.exports = mongoose.model('Employee', employeeSchema);