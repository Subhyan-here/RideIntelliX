import express from 'express';
import { createUser, deleteUser, getallUser, updateUser } from '../controllers/userController';
import upload from '../middleware/multer';
import { protect } from '../middleware/authMiddleware';


const userRouter = express.Router();


// const multer = require('multer');

//image upload
// const storage = multer.diskStorage({
//     destination:function(req,file,cb) {
//         cb(null, 'uploads/');
//     },
//     filename:function(req,file,cb) {
//         cb(null,Date.now()+ path.extname(file.originalname));
//     },
// });

// const upload = multer({storage:storage});

router.get('/', protect, getallUser);
router.post('/create-user', upload.single("image"), protect, createUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

export default userRouter;