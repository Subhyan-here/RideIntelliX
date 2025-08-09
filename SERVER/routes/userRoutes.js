import express from 'express';
import { createUser, deleteUser, getallUser, loginUser, updateUser } from '../controllers/userController.js';
import picture from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';


const userRouter = express.Router();


userRouter.get('/data', authMiddleware, getallUser)
userRouter.post('/register', picture.single("image"), createUser)
userRouter.post('/login', loginUser)
userRouter.put('/:id', authMiddleware, updateUser)
userRouter.delete('/:id', authMiddleware, deleteUser)

export default userRouter;