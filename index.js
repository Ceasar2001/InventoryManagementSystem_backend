import dotenv from 'dotenv';
dotenv.config(); // load .env first

import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log("MONGO_URI =", process.env.MONGO_URI); // debug
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});
