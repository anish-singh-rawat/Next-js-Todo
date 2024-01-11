import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URL)
        console.log('connectMongoDB successfully');
    } catch (error) {
        console.log(error);
    }
}