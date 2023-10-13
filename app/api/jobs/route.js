import Job from "../../../models/Job";
import { connectToDB } from "../../../utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const body = await request.json();
  
    const newJob = new Job(body);
  
    try {
      await connectToDB();
  
      await newJob.save();
  
      return new Response("Job has been created", { status: 201 });
    } catch (err) {
        return new Response(console.log(err), { status: 500 })
       
    }
  };

  export const GET = async (request) => {
    
  
    try {
      await connectToDB();
     
      const jobs = await Job.find()
  
      return new NextResponse(JSON.stringify(jobs), { status: 201 });
    } catch (err) {
        return new NextResponse(console.log(err), { status: 500 })
       
    }
  };