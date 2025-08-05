//importing all dependencies

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require('./config/db');
const riderRoutes = require('./routes/riderRoutes');
const userRoutes = require('./routes/userRoutes');

//calling all dependencies

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
connectdb();
app.use('/api/rider',riderRoutes);
app.use('/api/users',userRoutes);


//API call

app.get('/',(req,res)=>{
    res.send("API is running");
});


//PORT setup

const PORT = process.env.PORT||7500;

app.listen(PORT,()=>console.log('Server is running succesfully port 7500'));