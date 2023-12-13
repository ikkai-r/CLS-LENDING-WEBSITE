const express = require ("express");
const router = express.Router();
const {
    getClientDashboard,
    clientDashboardRedirect
} = require('../controllers/c_dashboard');

router.get('/', clientDashboardRedirect);
router.get('/:id', getClientDashboard);
module.exports = router;