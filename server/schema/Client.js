const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    profile_pic:{
        type:String,
        // default thing here
    },
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Prefer not to say'] // male, female, prefer not to say
    },
    region:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
    },
    baranggay: {
        type: String,
        required: true
    },
    addtl_address:{
        type: String
    },
    post_commented: {
        type: mongoose.Schema.Types.ObjectId, ref:'Post'
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        min: 10,
        required: true,
    },
    contact_num:{
        type: String,
        required: true,
    },
    fb_link:{
        type: String,
        required: true,
    },
    gov_id:{
        type: String,
        required: true
    },
    signature:{
        type:String,
        required: true
    
    },
})

module.exports = mongoose.model('Client', clientSchema);