const controller = {

    getIndex: function(req, res) {
        // your code here
        res.render('index', {header: 'test', layout: 'layouts/main'}); // This is to load the page initially
    }

}

module.exports = controller;