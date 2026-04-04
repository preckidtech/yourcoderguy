import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventType, path, device } = body;

    // Save the event securely to Supabase
    const event = await prisma.eventTracker.create({
      data: {
        eventType,
        path: path || "/",
        device: device || "UNKNOWN",
      },
    });

    return NextResponse.json({ success: true, event }, { status: 200 });
  } catch (error) {
    console.error("Tracking Error:", error);
    return NextResponse.json({ success: false, error: "Failed to track event" }, { status: 500 });
  }
}