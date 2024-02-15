const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://pritammagdum24:Pritam1622@chatapplication.fenzkw0.mongodb.net/?retryWrites=true&w=majority")
        // const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error is : ${error.message}`)
        console.log(process.env.MONGO_URI);
        process.exit();
    }

}

module.exports = connectDB;