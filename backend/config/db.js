import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error){
        console.error(`Error: ${error.message}`);
        //there was an error, so exit the process with a failure, 0 is success
        process.exit(1);
    }
}

