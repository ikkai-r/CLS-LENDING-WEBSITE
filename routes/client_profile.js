const express = require ("express");
const router = express.Router();
const {
    getClientProfile,
} = require('../controllers/client_profile');

router.get('/', getClientProfile);
module.exports = router;