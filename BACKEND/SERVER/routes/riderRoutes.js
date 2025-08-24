import express from 'express';
import picture from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { createRider, deleteRider, getallRider, updateRider } from '../controllers/riderController.js';


const riderRouter = express.Router();

riderRouter.get('/create', authMiddleware, createRider);
riderRouter.post('/create-rider', picture.single("image"), authMiddleware, getallRider);
riderRouter.put('/:id', authMiddleware, updateRider);
riderRouter.delete('/:id', authMiddleware, deleteRider);

export default riderRouter;