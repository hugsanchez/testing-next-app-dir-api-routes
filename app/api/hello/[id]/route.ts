import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  const id = params.id;
  const { searchParams } = request.nextUrl;
  const sort = searchParams.get('sort');

  // const { searchParams } = new URL(request.url);
  // const sort = searchParams.get('sort');

  return NextResponse.json({ message: 'Hello, Next.js!', id, sort},{ status: 201 })
}