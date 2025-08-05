const express = require('express');
const router = express.Router();

const {
    getallRider,
    createRider,
    updateRider,
    deleteRider
} = require('../controllers/riderController');

const multer = require('multer');

//image upload
const storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null, 'uploads/');
    },
    filename:function(req,file,cb) {
        cb(null,Date.now()+ path.extname(file.originalname));
    },
});

const upload = multer({storage:storage});

router.get('/',getallRider);
router.post('/',upload.single('image') ,createRider);
router.put('/:id', updateRider);
router.delete('/:id', deleteRider);

module.exports = router;