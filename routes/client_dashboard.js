const express = require ("express");
const router = express.Router();
const {
    getClientDashboard2,
} = require('../controllers/client_dashboard');

router.get('/', getClientDashboard2);
module.exports = router;