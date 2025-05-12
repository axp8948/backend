import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // mongoose returns an object
        console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1) // nodejs gives you accesss to the processs, and you can exit the process with this
    }
}

export default connectDB