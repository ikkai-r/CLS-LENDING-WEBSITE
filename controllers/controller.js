const controller = {

    getIndex: function(req, res) {
        // your code here
        res.render('login', {header: 'test', layout: 'layouts/main_no', css: '/css/login2.css'}); // This is to load the page initially
    }, 
    getRegister: function(req, res) {
        res.render('register', {layout: 'layouts/main_no', css: '/css/register.css'})
    },
    getDashboard: function (req, res) {
        res.render('dashboard', {layout: 'layouts/main', css: '/css/hamburger.css'});
    },
    getClientDashboard: function (req, res) {
        res.render('client_dashboard', {layout: 'layouts/main_no'});
    },
    getClientProfile: function (req, res) {
        res.render('client_profile', {layout: 'layouts/main', css: '/css/client_profile.css'});
    }

}

module.exports = controller;