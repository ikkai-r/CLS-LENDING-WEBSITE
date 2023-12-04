const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Loan = require('../server/schema/Loan')

const router = express.Router();
module.exports = router;