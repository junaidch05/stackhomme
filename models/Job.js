import mongoose, { Schema } from 'mongoose';


const jobSchema = new Schema(
    {
        postion: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
        experience: {
          type: String,
          required: true,
        },
        jobtype:{
          type: String,
          required: true,
        },
        role: {
          type: [String],
          required: true,
        },
        requirments:{
          type: [String],
          required: true,
        },

        submitLink:{
            type: String,
            required: true,
          },
      
       
      },
      { timestamps: true }
);

export default mongoose.models.Job || mongoose.model("Job", jobSchema);