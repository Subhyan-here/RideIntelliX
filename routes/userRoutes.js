const express = require('express');
const router = express.Router();

const {
    getallUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

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

router.get('/',getallUser);
router.post('/',upload.single('image') ,createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;