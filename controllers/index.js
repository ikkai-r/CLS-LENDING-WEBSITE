const Client = require('../server/schema/Client');
const Employee = require('../server/schema/Employee');
const bcrypt = require('bcryptjs');

const getIndex = function(req, res) {
    res.render('login', {header: 'test', layout: 'layouts/main_no', css: '/css/login2.css'}); // This is to load the page initially
}

const employeeLogIn = async function(req, res) {
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
}

const verifyEmployeeEmail = async function(req, res) {
    try {
        const copy = await Employee.find({
            email: req.query.email,
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
}

const verifyClientEmail = async function(req, res) {
    try {
        const copy = await Client.find({
            email: req.query.email,
        }).exec();
    
        const exists = copy.length > 0;

        res.json(exists);
    } catch(err) {
        res.json(false);
    }
}

const clientLogIn = async function(req, res) {
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
}

module.exports = {
    getIndex,
    employeeLogIn,
    verifyEmployeeEmail,
    verifyClientEmail,
    clientLogIn,
}