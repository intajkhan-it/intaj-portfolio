import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // This logs to your terminal (and later, Vercel logs)
    console.log("New Contact Submission:", body);

    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}