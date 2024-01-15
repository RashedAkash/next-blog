
import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log(id,params);
  try {
    connectToDb()
    const post = await User.findOne({id})
    console.log(post);
  return NextResponse.json(post)
  } catch (error) {
   console.log(error); 
  }
}