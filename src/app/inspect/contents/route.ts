import { NextResponse } from "next/server";
import { getContentTemplates } from "@/utils/twilio";

// import { Twilio } from "twilio";

export async function GET() {
  let profiles = await getContentTemplates();
  return NextResponse.json(profiles);
}
