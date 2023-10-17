"use server";

import { Twilio } from "twilio";
import { redirect } from "next/navigation";
import { getProfiles } from "@/utils/segment";
import axios from "axios";

type MessageObject = {
  shortenUrls?: boolean;
  from: string;
  to: string;
  contentSid?: string;
  contentVariables?: string;
  body?: string;
};

export async function sendAction(formData: FormData) {
  const profiles = await getProfiles();

  const contentSid = formData.get("contentSid") as string;

  const messages = profiles.map((profile) => {
    return {
      to: profile.phone,
      contentVariables: {
        0: profile.firstName,
        1: profile.favoriteFlavor,
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
      // shortenUrls: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: process.env.TWILIO_API_KEY || "",
        password: process.env.TWILIO_API_SECRET || "",
      },
    }
  );
  console.log(res?.data.message_receipts);
  redirect(`.`); // Navigate to new route
}

// await Promise.all(
//   profiles.map(async (profile) => {
//     const messageObject: MessageObject = {
//       // shortenUrls: true,
//       from: process.env.TWILIO_SENDER || "",
//       to: profile.phone,
//     };

//     if (contentSid?.startsWith("HX")) {
//       messageObject.contentSid = contentSid;
//       messageObject.contentVariables = JSON.stringify({
//         0: profile.firstName,
//         1: profile.favoriteFlavor,
//         2: `https://www.twilio.com/try-twilio?utm_campaign=EVENT_SIGNAL_2023_OCT_13_SIGNAL_London_EMEA&utm_source=twilio&utm_medium=conference&utm_content=signallondon2023&utm_term=devevangel`,
//       });
//     } else {
//       messageObject.body = formData.get("message") as string;
//     }
//     return client.messages.create(messageObject);
//   })
// );
