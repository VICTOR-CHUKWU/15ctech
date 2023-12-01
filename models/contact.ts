import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        subject: String,
        description: String,
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;