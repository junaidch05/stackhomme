import Message from "../../../models/Message";
import { connectToDB } from "../../../utils/db";

export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Message(body);
  
    try {
      await connectToDB();
  
      await newPost.save();
  
      return new Response("Message has been created", { status: 201 });
    } catch (err) {
        return new Response(console.log(err), { status: 500 })
       
    }
  };