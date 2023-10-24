import { NextResponse } from "next/server";
import { getProfiles } from "@/utils/segment";

// import { Twilio } from "twilio";

export async function GET() {
  let profiles = await getProfiles();
  return NextResponse.json(profiles);
}
