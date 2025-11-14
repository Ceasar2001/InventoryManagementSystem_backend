import bcrypt from 'bcryptjs';
import User from './models/User.js';
import connectDB from './db/connection.js';

const register = async () => {
    try {
        connectDB();
        const hashPassword = await bcrypt.hash('admin123', 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            address: "Camiguin, Philippines",
            role: "admin"
        })
        await newUser.save();
        console.log("Admin user created");
    } catch (error) {
        console.log(error);
    }
}

register();