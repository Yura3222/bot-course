const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'ProfiAuth'
    });

    console.log('MongoDB connected!');

}

module.exports = { connectDB };