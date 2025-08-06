import express from 'express';
import { createUser, deleteUser, getallUser, updateUser } from '../controllers/userController';



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

router.get('/', getallUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default userRouter;