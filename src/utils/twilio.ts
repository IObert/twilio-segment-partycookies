import { Twilio } from "twilio";
import { cache } from "react";

export const revalidate = 3600;

const client = new Twilio(
  process.env.ACCOUNT_SID || "",
  process.env.AUTH_TOKEN || ""
);

export const lookupSmsPumpingRisk = cache(async (number: string) => {
  const loopupRes = await client.lookups.v2
    .phoneNumbers(number.replace("whatsapp:", ""))
    .fetch({ fields: "sms_pumping_risk" });
  return loopupRes.smsPumpingRisk?.sms_pumping_risk_score;
});

export const getContentTemplates = cache(async () => {
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
});
