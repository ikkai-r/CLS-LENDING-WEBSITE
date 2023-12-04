const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const loanSchema = new mongoose.Schema({
    reference:{
        type: String,
    },
    date_applied:{
        type: Date,
    },
    date_approved:{
        type: Date
    },
    // not sure if need additional dates for subsequent payments...?
    client: {
        type: mongoose.Schema.Types.ObjectId, ref:'Client'
    },
    category: {
        type: String,
        enum: ['Investment', 'Loan Out', 'Profit', 'Capital']
    },
    status:{
        type: String,
        enum: ['Paid', 'Overdue', 'Sent', 'Complete']

    },
    description:{
        type: String
    },
    reference:{
        type:String
    },
    capital:{
        type: Decimal128,
        default: 0,
    },
    interest:{
        type: Decimal128,
        default: 0,
    },
    balance:{
        type: Decimal128,
        default: 0,
    },
    terms: {
        type: String,
        required: true,
        enum: ['Monthly', 'Biweekly', 'Weekly', 'Quarterly']
    },
    approved:{
        type: Boolean,
        default: false
    },
    loan_details:{
        type: mongoose.Schema.Types.ObjectId, ref:'Loan_Detail'
    }
})

module.exports = mongoose.model('Loan', loanSchema);