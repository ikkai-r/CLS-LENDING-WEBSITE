const controller = {

    getIndex: function(req, res) {
        // your code here
        res.render('index', {header: 'test', layout: 'layouts/main', css: '/css/login.css'}); // This is to load the page initially
    }, 
    getRegister: function(req, res) {
        res.render('register', {layout: 'layouts/main', css: '/css/register.css'})
    },
    getDashboard: function (req, res) {
        res.render('dashboard', {layout: 'layouts/main'});
    },
    getClientDashboard: function (req, res) {
        res.render('client_dashboard', {layout: 'layouts/main'});
    },
    getLogin: function (req, res) {
        res.render('login', {layout: 'layouts/main', css: '/css/login.css'});
    }


}

module.exports = controller;