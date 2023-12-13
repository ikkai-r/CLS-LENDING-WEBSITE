const express = require ("express");
const router = express.Router();
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

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const upload = multer({ storage: storage });
const id_uploads = upload.fields([{ name: 'id_name', maxCount: 1 }, { name: 'signature_image', maxCount: 1 }])

const {
  getRegister,
  registerClient,
  verifyClientEmail,
  generateRegistrationLink,
} = require('../controllers/register.js')

router.get("/api/verifyClientEmail", verifyClientEmail);
router.post('/api/generate-registration-link', generateRegistrationLink);
router.get("/", getRegister);
router.post("/", id_uploads, registerClient);

module.exports = router;