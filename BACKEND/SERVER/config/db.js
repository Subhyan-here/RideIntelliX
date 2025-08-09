import mongoose from "mongoose";

const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);     //error handling exception
        console.log("MongoDB Connected");
    }
    catch(error) {
        console.error("DB connection failed",error.message);
    }
}

export default connectdb