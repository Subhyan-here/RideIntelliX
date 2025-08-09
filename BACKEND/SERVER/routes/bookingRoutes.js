import express from "express";
import { changeBookingStatus, checkAvailabilityofVehicle, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityofVehicle)
bookingRouter.post('/create', authMiddleware, createBooking)
bookingRouter.get('/user', authMiddleware, getUserBookings)
bookingRouter.get('/owner', authMiddleware, getOwnerBookings)
bookingRouter.post('/change-status', authMiddleware, changeBookingStatus)

export default bookingRouter;