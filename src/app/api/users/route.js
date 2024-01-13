import { usersArray } from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json(usersArray)
}