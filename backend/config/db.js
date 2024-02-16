// import mongoose from "mongoose";
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI, {
        const conn = await mongoose.connect("mongodb+srv://pritammagdum24:Pritam1622@chatapplication.fenzkw0.mongodb.net/?retryWrites=true&w=majority");

        console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;