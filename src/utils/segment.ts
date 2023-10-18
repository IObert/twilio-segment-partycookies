import axios from "axios";
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

async function fetchSegment(url: string) {
  const res = await axios.get(url, {
    headers: {
      Authorization: `Basic ${btoa(process.env.SEGMENT_TOKEN + ":")}`,
    },
  });
  return res.data;
}

export const getProfiles = cache(async () => {
  let profiles = [];
  try {
    const profilesResponse = await fetchSegment(
      `https://profiles.segment.com/v1/spaces/${process.env.SEGMENT_SPACE_ID}/collections/users/profiles`
    );

    if (!profilesResponse.data) {
      return [];
    }

    profiles = await Promise.all(
      profilesResponse.data.map(async (profile: any) => {
        let traits = {};
        let res = await fetchSegment(
          `https://profiles.segment.com/v1/spaces/${process.env.SEGMENT_SPACE_ID}/collections/users/profiles/${profile.segment_id}/traits`
        );
        traits = {
          ...traits,
          ...res.traits,
        };
        while (res.cursor.has_more) {
          res = await fetchSegment(res.cursor.url);
          traits = {
            ...traits,
            ...res.traits,
          };
        }
        res = await fetchSegment(
          `https://profiles.segment.com/v1/spaces/${process.env.SEGMENT_SPACE_ID}/collections/users/profiles/${profile.segment_id}/events`
        );
        const clickTrackEvent = res.data?.findIndex(
          (event: any) => event.event === "Click Tracked"
        );
        return {
          clickedLink: clickTrackEvent > -1,
          ...traits,
        };
      })
    );
  } catch (e) {
    console.error(e);
  }
  return profiles.filter((p) => p.phone);
});
