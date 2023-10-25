import fetch from "node-fetch";

export async function POST(request) {
  const { email } = await request.json();
  if (email) {
    const cleaned = email.replace("+", "%2B");
    try {
      const res = await fetch(
        `https://profiles.segment.com/v1/spaces/spa_7ZjJrBMwQb6LxW9AXEgocm/collections/users/profiles/email:${cleaned}/traits`,
        {
          headers: {
            Authorization: `Basic ${btoa(process.env.SEGMENT_TOKEN + ":")}`,
          },
        },
      );
      const { traits } = await res.json();
      return Response.json({
        faveCookie: traits?.favourite_cookie_practice || null,
      });
    } catch (error) {
      return Response.json({});
    }
  } else return Response.json({});
}
