import { configureApis, unwrap } from "@segment/public-api-sdk-typescript";
export async function POST(request) {
  const { email } = await request.json();

  const api = configureApis(process.env.SEGMENT_PUBLIC_API_TOKEN);

  try {
    const result = await unwrap(
      api.spaces.replaceMessagingSubscriptionsInSpaces(
        "spa_7ZjJrBMwQb6LxW9AXEgocm",
        {
          subscriptions: [{ key: email, type: "EMAIL", status: "SUBSCRIBED" }],
        },
      ),
    );
  } catch (e) {
    console.log("ERROR:", e);
  }
  return Response.json({});
}
