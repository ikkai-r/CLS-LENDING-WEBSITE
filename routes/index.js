const express = require ("express");
const router = express.Router();

const {
    getIndex,
    employeeLogIn,
    verifyEmployeeEmail,
    verifyClientEmail,
    clientLogIn,
} = require('../controllers/index.js')

router.get('/', getIndex)
router.get("/employeeLogIn", employeeLogIn);
router.get("/verifyEmployeeEmail", verifyEmployeeEmail);
router.get("/verifyClientEmail", verifyClientEmail);
router.get("/clientLogIn", clientLogIn);


module.exports = router;