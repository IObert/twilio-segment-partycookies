import { NextRequest, NextResponse } from "next/server";
import { Analytics } from "@segment/analytics-node";

// Incoming payload
// {
//     "event_type": "click",
//     "messaging_service_sid": "MGxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     "clicked_at": 1662760520349,
//     "sms_sid": "SMxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     "link": "https://www.owlshoesinc.com/newdrops/blackfriday?cat=150463332457&source=usa&h=bf&uid=aDwEv34fFsa3",
//     "account_sid": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     "from": "+1714xxxxxxx",
//     "to": "+1xxxxxxxxxx",
//     "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/105.0.5195.100 Mobile/15E148 Safari/604.1"
//   }

export async function POST(request: NextRequest) {
  console.log("Incoming track click event");
  const data = await request.json();

  const analytics = new Analytics({
    writeKey: process.env.SEGMENT_SERVER_WRITE_KEY || "",
  });
  // try {
  analytics.track({
    userId: data.to,
    event: "Click Tracked",
    properties: {
      clickTime: data.click_time,
      clickType: data.event_type,
      link: data.link,
      messageSid: data.sms_sid,
      phone: data.to,
      userAgent: data.user_agent,
    },
  });
  await analytics.closeAndFlush(); // only for demo purposes, in production the delay is acceptable
  //   } catch (error) {
  //     debugger;
  //   }
  return NextResponse.json({});
}
