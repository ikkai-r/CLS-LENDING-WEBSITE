const getClientProfile = function (req, res) {
    res.render('client_profile', {layout: 'layouts/main', css: '/css/client_profile.css'});
}

module.exports = {
    getClientProfile,
}