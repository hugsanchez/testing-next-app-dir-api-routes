import { unlikeTweet } from "@/lib/prisma/tweets";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { tweetId } = params;
    const { tweet, error } = await unlikeTweet({ tweetId })
    if(error) throw new Error(error)

    return NextResponse.json({tweet}, {status:200})
  } catch(error) {
    return NextResponse.json({error: error.message}, {status:500})
  }
}