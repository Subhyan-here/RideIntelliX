import express from "express";
import { changeBookingStatus, checkAvailabilityofVehicle, createBooking, getAllbookings, getOwnerBookings, getUserBookings, verifyPayment } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityofVehicle)
bookingRouter.post('/create', authMiddleware, createBooking)
bookingRouter.get('/user', authMiddleware, getUserBookings)
bookingRouter.get('/owner', authMiddleware, getOwnerBookings)
bookingRouter.post('/change-status', authMiddleware, changeBookingStatus)
bookingRouter.post('/verify', verifyPayment)
bookingRouter.get('/get-bookings', getAllbookings)

export default bookingRouter;