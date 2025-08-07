import express from "express";
import {protect} from "../middleware/authMiddleware";
import { addvehicle, changeRoleToOwner, deleteVehicle, getOwnerVehicles, toggleVehicleAvailability } from "../controllers/ownerController.";
import upload from "../middleware/multer";
import { dashboardData, updateUserImage } from "../controllers/ownerController";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner )
ownerRouter.post("/add-vehicle", upload.single("image"),  protect, addvehicle)
ownerRouter.post("/vehicles", protect, getOwnerVehicles)
ownerRouter.get("/toggle-vehicle", protect, toggleVehicleAvailability)
ownerRouter.post("/delete-vehicle", protect, deleteVehicle)
ownerRouter.get('/dashboard', protect, dashboardData)
ownerRouter.post('/update-image', upload.single("image"), protect, updateUserImage)

export default ownerRouter;