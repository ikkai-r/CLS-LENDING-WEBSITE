const bcrypt = require('bcryptjs');
const Client = require('../server/schema/Client')

const getRegister = function(req, res) {
    /* const { link } = req.params;
    const linkData = generatedLinks.get(link);

    if (linkData && !linkData.expired) { */
        res.render('register', {layout: 'layouts/main_no', css: '/css/register.css'})
    // } 
    /* else{
        res.status(404).send('Invalid or expired registration link.');
    }
     */
};

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

const registerClient = async (req, res)=> {
    /* const { link } = req.params;
    const linkData = generatedLinks.get(link);

    if (linkData && !linkData.expired) {
     */
        try {   
                var newClient = new Client();
                
                if(req.files) {
                
                    //First Name
                    newClient.first_name = req.body.first_name;

                    //Middle Name
                    if(req.body.middle_name !== '' || req.body.middle_name != null || req.body.middle_name != undefined) {
                    newClient.middle_name = req.body.middle_name;
                    }
                    
                    //Last Name
                    newClient.last_name = req.body.last_name;

                    //Gender
                    newClient.gender = req.body.gender;

                    //Region
                    newClient.region = req.body.region;

                    //Province
                    newClient.province = req.body.province;

                    //City
                    newClient.city = req.body.city;

                    //Barangay
                    newClient.barangay = req.body.barangay;

                    //Additional Address Details
                    newClient.addtl_address = req.body.add_details;

                    //Email
                    newClient.email = req.body.email;

                    //Password (Hashed)
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    newClient.password = hashedPassword;

                    //Contact Number
                    newClient.contact_num = req.body.contact_number;

                    //Facebook Link
                    newClient.fb_link = req.body.facebook_link;

                    //Government ID Image
                    newClient.gov_id = "images/" + req.files['id_name'][0].filename;

                    //Signature Image
                    newClient.signature = "images/" + req.files['signature_image'][0].filename;
                }
                newClient.save();
                linkData.expired = true;

                return res.json({ message: 'Done Registering'} );

        } catch(error){
            console.error('Error registering:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
   /*  }
    else{
        res.status(404).send('Invalid or expired registration link.');
    } */
}


/////////registration link generation

const generatedLinks = new Map();

function generateUniqueLink() {
    return 'https://samplename.com/register/' + Math.random().toString(36).substring(2, 15);
}

function generateRegistrationLink(req, res) {
    const link = generateUniqueLink();
    generatedLinks.set(link, { expired: false });
    res.json({ link });
}



module.exports = {
    getRegister,
    registerClient,
    verifyClientEmail,
    generateRegistrationLink,
};