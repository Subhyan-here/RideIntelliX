import express from 'express';
import picture from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { createRider, deleteRider, getallRider, updateRider } from '../controllers/riderController.js';


const riderRouter = express.Router();


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

riderRouter.get('/create', authMiddleware, createRider);
riderRouter.post('/create-rider', picture.single("image"), authMiddleware, getallRider);
riderRouter.put('/:id', authMiddleware, updateRider);
riderRouter.delete('/:id', authMiddleware, deleteRider);

export default riderRouter;