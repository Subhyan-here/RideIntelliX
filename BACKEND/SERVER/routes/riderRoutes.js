import express from 'express';
import picture from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { createRider, deleteRider, getallRider, updateRider } from '../controllers/riderController.js';


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

userRouter.get('/', authMiddleware, createRider);
userRouter.post('/create-user', picture.single("image"), authMiddleware, getallRider);
userRouter.put('/:id', authMiddleware, updateRider);
userRouter.delete('/:id', authMiddleware, deleteRider);

export default userRouter;