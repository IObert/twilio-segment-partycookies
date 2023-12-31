"use server";

import { getProfiles } from "@/utils/segment";
import axios from "axios";
import { maskPhone } from "maskdata";

export async function sendAction(formData: FormData) {
  const profiles = await getProfiles();

  const contentSid = formData.get("contentSid") as string;

  const messages = profiles
    .filter((profile) => {
      if (profile.smsPumpingRisk > 75) {
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
          2: `https://partycookies.store`,
        },
      };
    })
    .filter(
      (message, index, self) =>
        index === self.findIndex((t) => t.to === message.to),
    );

  const res = await axios.post(
    "https://preview.messaging.twilio.com/v1/Messages",
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
