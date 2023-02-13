import { Schema, model } from "mongoose";

interface IUser {
    username: String;
    email: String;
    password: String;
}

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
)

export const UserModel = model<IUser>('user', userSchema)