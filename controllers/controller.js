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
        res.render('client_dashboard', {layout: 'layouts/main_no', css: '/css/client_profile.css'});
    },
    getClientProfile: function (req, res) {
        res.render('client_profile', {layout: 'layouts/main', css: '/css/client_profile.css'});
    } ,
    getLoanRecords: function (req, res) {
        res.render('loan-records', {layout: 'layouts/main', css: '/css/hamburger.css'});
    }

}

//registration link generation
const generatedLinks = new Map();

function generateUniqueLink() {
    return 'https://samplename.com/register/' + Math.random().toString(36).substring(2, 15);
}

function generateRegistrationLink(req, res) {
    const link = generateUniqueLink();
    generatedLinks.set(link, { expired: false });
    res.json({ link });
}

function registerUser(req, res) {
    const { link } = req.params;
    const linkData = generatedLinks.get(link);
    if (linkData && !linkData.expired) {
        linkData.expired = true;
        res.send('Registration successful!');
    } else {
        res.status(404).send('Invalid or expired registration link.');
    }
}

module.exports = {
    ...controller,
    generateRegistrationLink,
    registerUser,
};