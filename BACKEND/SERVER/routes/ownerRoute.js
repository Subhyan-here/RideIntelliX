import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addvehicle, changeRoleToOwner, deleteVehicle, getOwnerVehicles, toggleVehicleAvailability } from "../controllers/ownerController.js";
import picture from "../middleware/upload.js";
import { dashboardData, updateUserImage } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role",authMiddleware, changeRoleToOwner )
ownerRouter.post("/add-vehicle", picture.single("image"),  authMiddleware, addvehicle)
ownerRouter.post("/vehicles", authMiddleware, getOwnerVehicles)
ownerRouter.get("/toggle-vehicle", authMiddleware, toggleVehicleAvailability)
ownerRouter.post("/delete-vehicle", authMiddleware, deleteVehicle)
ownerRouter.get('/dashboard', authMiddleware, dashboardData)
ownerRouter.post('/update-image', picture.single("image"), authMiddleware, updateUserImage)

export default ownerRouter;