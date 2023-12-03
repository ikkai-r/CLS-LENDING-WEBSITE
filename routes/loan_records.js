const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Loan = require('../server/schema/Loan')

const router = express.Router();

router.get("/", async function(req, res) {


    try {
        const getLoans = await Loan.find().sort({"date":-1}).lean()
        res.render("loan_records", {
           loan: getLoans
        });
    
    } catch(err) {
        console.log(err);
    }
});
module.exports = router;