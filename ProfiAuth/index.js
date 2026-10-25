const express = require('express')
const PORT = process.env.PORT || 5000
const Authrouter = require('./authRouter')
const app = express()

const { connectDB } = require('./Mongo');

async function start() {
    try {
        const db = await connectDB();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
        console.log('Database ProfiAuth is ready');

        // Тут запускай свій Express-сервер
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exitCode = 1;
    }
}

app.use(express.json())
app.use("/auth", Authrouter)



start()