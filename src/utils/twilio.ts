import { Twilio } from "twilio";
import { MessageListInstanceCreateOptions } from "twilio/lib/rest/api/v2010/account/message";
import { cache } from "react";

export const revalidate = 3600;

const client = new Twilio(
  process.env.TWILIO_API_KEY,
  process.env.TWILIO_API_SECRET,
  {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
  },
);

export const sendMessage = async (
  message: MessageListInstanceCreateOptions,
) => {
  return await client.messages.create({
    shortenUrls: true,
    ...message,
  });
};

export const lookupSmsPumpingRisk = cache(async (number: string) => {
  const loopupRes = await client.lookups.v2
    .phoneNumbers(number.replace("whatsapp:", ""))
    .fetch({ fields: "sms_pumping_risk" });
  return loopupRes.smsPumpingRisk?.sms_pumping_risk_score;
});

export const getContentTemplates = async () => {
  const contentsRes = await client.content.v1.fetch({
    method: "get",
    uri: "Content",
  });
  const contents = contentsRes.contents
    .filter((c: any) => c.friendly_name.startsWith("signal_"))
    .map((c: any) => {
      return {
        friendlyName: c.friendly_name,
        sid: c.sid,
        variables: c.variables,
      };
    });
  return contents;
};
