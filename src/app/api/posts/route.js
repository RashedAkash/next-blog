import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb()
    const posts = await User.find()
    console.log(posts);
    return NextResponse.json(posts)
  } catch (error) {
    console.log(error);
  }
}