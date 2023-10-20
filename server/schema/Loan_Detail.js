const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const loanDetailSchema = new mongoose.Schema({
    loan: {
        type: mongoose.Schema.Types.ObjectId, ref:'Loan'
    },
    date:{
        type: Date,
        required: true,
    },
    description:{
        type: String,
        required: true,
        enum: ['Initial Loan Approval', 'Due - Interest', 'Payment', 'Penalty']
    },
    amount: {
        type: Decimal128,
        required: true
    }
    // get and update the balance from loan
})

module.exports = mongoose.model('Loan_Detail', loanDetailSchema);