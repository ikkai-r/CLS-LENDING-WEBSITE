const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Client = require('../server/schema/Client');
const router = express.Router();

const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img/'); 
  },
  filename: function (req, file, cb) {
    cb(null, req.last_name + '_' + req.first_name + '_' + Date.now() + req.file.ext);
  }
});
const upload = multer({ storage: storage });

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


// noting lang na this doesn't work fully yet
const id_uploads = upload.fields([{ name: 'id_image', maxCount: 1 }, { name: 'signature_image', maxCount: 1 }])
router.post("/", id_uploads, async (req, res)=>{
    try {   
            console.log(req.body);
            var newClient = new Client();
            if(req.files) {
                newClient.first_name = req.params.first_name;
                newClient.last_name = req.params.last_name;
                newClient.gender = req.params.gender;
                newClient.region = req.params.region;
                newClient.province = req.params.province;
                newClient.city = req.params.city;
                newClient.barangay = req.params.barangay;
                newClient.addtl_address = req.params.add_details;
                newClient.email = req.params.email;
                newClient.password = req.params.password;
                newClient.contact_num = req.params.contact_number;
                newClient.fb_link = req.params.facebook_link;
                newClient.gov_id = req.files['id_image'].filename;
                newClient.signature = req.files['signature_image'].filename;
            }
            newClient.save();
            
            return res.json({ message: 'Done Registering'} );
            
        
    } catch(error){
        console.error('Error registering:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
})

module.exports = router;