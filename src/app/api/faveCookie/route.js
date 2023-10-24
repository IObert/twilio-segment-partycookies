import fetch from "node-fetch";

export async function POST(request) {
  const { email } = await request.json();
  if (email) {
    const res = await fetch(
      `https://profiles.segment.com/v1/spaces/spa_7ZjJrBMwQb6LxW9AXEgocm/collections/users/profiles/email:${email}/traits`,
      {
        headers: {
          Authorization: `Basic ${btoa(process.env.SEGMENT_TOKEN + ":")}`,
        },
      },
    );

    const { traits } = await res.json();
    return Response.json({ faveCookie: traits.favourite });
  } else return Response.json({});
}
