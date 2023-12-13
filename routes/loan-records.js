const express = require ("express");
const router = express.Router();

const {
    getLoanRecords,
} = require('../controllers/loan-records')

router.get('/', getLoanRecords)

module.exports = router;