const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    profile_pic:{
        type:String,
        default: '/images/pfp_default.jpg'
    },
    first_name: {
        type: String,
        required: true
    },
    middle_name:{
        type: String
    },
    last_name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['male', 'female', 'pref-not'] // male, female, prefer not to say
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
    barangay: {
        type: String,
        required: true
    },
    addtl_address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
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