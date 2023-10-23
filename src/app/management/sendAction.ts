"use server";

import { getProfiles } from "@/utils/segment";
import axios from "axios";
import { maskPhone } from "maskdata";

export async function sendAction(formData: FormData) {
  const profiles = await getProfiles();

  const contentSid = formData.get("contentSid") as string;

  const messages = profiles
    .filter((profile) => {
      // if (profile.smsPumpingRisk < 75) {
      if (profile.smsPumpingRisk === 32) {
        console.log(
          `Skipping ${maskPhone(
            profile.phone,
          )} because of high risk of SMS pumping`,
        );
        return false;
      }
      return true;
    })
    .map((profile) => {
      return {
        to: profile.phone,
        contentVariables: {
          0: profile.firstName,
          1: profile.randomFlavor,
          2: `https://www.twilio.com/try-twilio?utm_campaign=EVENT_SIGNAL_2023_OCT_13_SIGNAL_London_EMEA&utm_source=twilio&utm_medium=conference&utm_content=signallondon2023&utm_term=devevangel`,
        },
      };
    });

  const res = await axios.post(
    "https://preview.messaging.twilio.com/v1/Messages.json",
    {
      messages,
      contentSid: contentSid,
      from: process.env.TWILIO_SENDER || "",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: process.env.TWILIO_API_KEY || "",
        password: process.env.TWILIO_API_SECRET || "",
      },
    },
  );

  return { title: `Sent ${res?.data.message_receipts.length} messages` };
}
