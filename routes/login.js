const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Client = require('../server/schema/Client');
const router = express.Router();

router.get("/verifyLogInCredentials", async function(req, res) {
    console.log(req.query.email);
    try {
        const copy = await Client.find({
            email: req.query.email,
            password: req.query.password
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
});

module.exports = router;