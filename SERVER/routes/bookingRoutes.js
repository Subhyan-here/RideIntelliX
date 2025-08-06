import express from "express";
import { changeBookingStatus, checkAvailabilityofVehicle, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController";
import { protect } from "../middleware/authMiddleware";

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityofVehicle)
bookingRouter.post('/create', protect, createBooking)
bookingRouter.get('/user', protect, getUserBookings)
bookingRouter.get('/owner', protect, getOwnerBookings)
bookingRouter.post('/change-status', protect, changeBookingStatus)

export default bookingRouter;