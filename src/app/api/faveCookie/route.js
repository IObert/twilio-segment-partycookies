import fetch from "node-fetch";
import { cookies } from "next/headers";

export async function POST(request) {
  const cookieStore = cookies();
  const email = cookieStore.get("ajs_user_id")?.value.replace("+", "%2B");
  if (email) {
    try {
      const res = await fetch(
        `https://profiles.segment.com/v1/spaces/spa_7ZjJrBMwQb6LxW9AXEgocm/collections/users/profiles/email:${email}/traits`,
        {
          headers: {
            Authorization: `Basic ${btoa(process.env.SEGMENT_TOKEN + ":")}`,
          },
        },
      );
      const { traits } = await res.json();
      return Response.json({
        faveCookie: traits?.favourite_backup || null,
      });
    } catch (error) {
      return Response.json({});
    }
  } else return Response.json({});
}
