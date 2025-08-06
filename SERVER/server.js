//importing all dependencies

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectdb from './config/db.js';
import riderRoutes from './routes/riderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoute.js';
import bookingRouter from './routes/bookingRoutes.js';

//calling all dependencies

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
connectdb();
app.use('/api/rider',riderRoutes);
app.use('/api/users',userRoutes);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);


//API call

app.get('/',(req,res)=>{
    res.send("API is running");
});


//PORT setup

const PORT = process.env.PORT||7500;

app.listen(PORT,()=>console.log('Server is running succesfully port 7500'));