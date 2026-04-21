import { dummyData } from "@/app/lib/placeholder-data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, ctx: RouteContext<"/api/message/[id]">) {
  const { id } = await ctx.params;

  // db action

  return NextResponse.json(dummyData);
}
