import mongoose from "mongoose";

const connecttoMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB Connected Successfully");
        
    } catch (error) {
        console.log("Error connecting to MongoDB" , error.message);
    }
};
export default connecttoMongoDB;