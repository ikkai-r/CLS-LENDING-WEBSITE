const express = require ("express");
const handlebars = require('handlebars');
const mongoose = require('mongoose');
const Client = require('../server/schema/Client');
const router = express.Router();
var path = require('path')

const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/'); 
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, req.body.last_name + '_' + req.body.first_name[0] + '_' + new Date().toISOString().replace(/:/g, '_').replace('.', '_') + "." + extension);
  },
  fileFilter: function (req, file, cb) {
    if (!(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg')) {
      return cb(null, false, new Error('not an image file!'));
    }
    else
      cb(null, true);
  }
});
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const upload = multer({ storage: storage });

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


// noting lang na this doesn't work fully yet
const id_uploads = upload.fields([{ name: 'id_name', maxCount: 1 }, { name: 'signature_image', maxCount: 1 }])
router.post("/", id_uploads, async (req, res)=>{
    try {   
            var newClient = new Client();
            if(req.files) {
                newClient.first_name = req.body.first_name;
                newClient.last_name = req.body.last_name;
                newClient.gender = req.body.gender;
                newClient.region = req.body.region;
                newClient.province = req.body.province;
                newClient.city = req.body.city;
                newClient.barangay = req.body.barangay;
                newClient.addtl_address = req.body.add_details;
                newClient.email = req.body.email;
                newClient.password = req.body.password;
                newClient.contact_num = req.body.contact_number;
                newClient.fb_link = req.body.facebook_link;
                newClient.gov_id = "images/" + req.files['id_name'][0].filename;
                newClient.signature = "images/" + req.files['signature_image'][0].filename;
            }
            newClient.save();
            
            return res.json({ message: 'Done Registering'} );
            
        
    } catch(error){
        console.error('Error registering:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
})

module.exports = router;