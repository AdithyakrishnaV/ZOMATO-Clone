import mongoose from "mongoose";

const UserSchema = new.mongoose.Schema({
    fullname: { type: String, required:true },
    email: { type: String, required:true },
    password: { type: String },
    address: [{ type: String }],
    phoneNumber: [{ detail: { type: String }, for: { type: String } }],
    },
    {
       timestamps: true,
    }
);

export const UserModel = mongoose.model("Users", UserSchema);