import mongoose, { Schema } from 'mongoose';


const messageSchema = new Schema(
    {
        first_name: {
          type: String,
          required: true,
        },
        last_name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        subject:{
          type: String,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
       
      },
      { timestamps: true }
);

export default mongoose.models.Message || mongoose.model("Message", messageSchema);