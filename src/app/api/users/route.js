import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { usersArray } from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async(request) => {
try {
  connectToDb()
  const users = await User.find()
  return NextResponse.json(users)
} catch (error) {
  console.log(error);
}
}

export const POST = async(req, res) => {
  const data = await req.json;
  return NextResponse.json({res:'success'})
}