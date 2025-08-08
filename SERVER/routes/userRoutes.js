import express from 'express';
import { createUser, deleteUser, getallUser, updateUser } from '../controllers/userController.js';
import picture from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';


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

userRouter.get('/', authMiddleware, getallUser);
userRouter.post('/create-user', picture.single("image"), authMiddleware, createUser);
userRouter.put('/:id', authMiddleware, updateUser);
userRouter.delete('/:id', authMiddleware, deleteUser);

export default userRouter;