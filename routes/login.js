const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Client = require('../server/schema/Client');
const Employee = require('../server/schema/Employee');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get("/employeeLogIn", async function(req, res) {
    try {
        const copy = await Employee.find({
            email: req.query.email,
            password: req.query.password
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
});

router.get("/verifyEmployeeEmail", async function(req, res) {
    try {
        const copy = await Employee.find({
            email: req.query.email,
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
});

router.get("/verifyClientEmail", async function(req, res) {
    try {
        const copy = await Client.find({
            email: req.query.email,
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
});

router.get("/clientLogIn", async function(req, res) {
    try {

        const find = await Client.findOne({email: req.query.email}, {password: 1}).exec();
        const hashedPassword = find.password;
        const validPassword = await bcrypt.compare(req.query.password, hashedPassword);

        if (validPassword){
            const copy = await Client.find({
                email: req.query.email,
                password: hashedPassword
            }).exec();
        
            const exists = copy.length > 0;
    
            res.json(exists);
        } else {
            res.json(false);
        }
        
    } catch(err) {
        res.json(false);
    }
});

module.exports = router;