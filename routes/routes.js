const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

app.get(`/`, controller.getIndex);
app.get('/register', controller.getRegister);
app.get('/dashboard', controller.getDashboard);
app.get('/c_dashboard', controller.getClientDashboard);

module.exports = app;