import { NextResponse } from "next/server";

export const GET = (_,response) => {
  const { id } = response.params;
  return NextResponse.json({id})
}