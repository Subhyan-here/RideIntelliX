import express from "express";
import {protect} from "../middleware/authMiddleware";
import { addvehicle, changeRoleToOwner } from "../controllers/ownerController";
import upload from "../middleware/multer";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner )
ownerRouter.post("/add-vehicle", upload.single("image"),  protect, addvehicle)

export default ownerRouter;