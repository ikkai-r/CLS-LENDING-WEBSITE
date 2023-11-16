const mongoose = require("mongoose");
const auditSchema = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    action:{
        type: String,
        required: true,
        enum: ['Add', 'Update', 'Delete']
    },
    performed_by:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Audit', auditSchema);