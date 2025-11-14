import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    address: {type: String},
    role: {type: String, enum:["staff", "admin"], default: "staff"}
})

const User = mongoose.model("User", userSchema);

export default User;