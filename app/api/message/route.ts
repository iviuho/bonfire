import { dummyData } from "@/app/lib/placeholder-data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // db action

  return NextResponse.json([dummyData]);
}
