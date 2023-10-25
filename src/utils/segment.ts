import axios from "axios";


async function fetchSegment(url: string) {
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Basic ${btoa(process.env.SEGMENT_TOKEN + ":")}`,
      },
    });
    return res.data;
  } catch (e: any) {
    if (e.response.status === 404) {
      return {};
    }
    throw e;
  }
}

export const getProfiles = async () => {
  let profiles = [];
  try {
    const profilesResponse = await fetchSegment(
      `https://profiles.segment.com/v1/spaces/${process.env.SEGMENT_SPACE_ID}/collections/users/profiles`,
    );

    if (!profilesResponse.data) {
      return [];
    }

    profiles = await Promise.all(
      profilesResponse.data.map(async (profile: any) => {
        let traits = {};
        let res = await fetchSegment(
          `https://profiles.segment.com/v1/spaces/${process.env.SEGMENT_SPACE_ID}/collections/users/profiles/${profile.segment_id}/traits`,
        );
        traits = {
          ...traits,
          ...res.traits,
        };
        while (res?.cursor?.has_more) {
          res = await fetchSegment(res.cursor.url);
          traits = {
            ...traits,
            ...res.traits,
          };
        }
        return traits;
      }),
    );
  } catch (e) {
    console.error(e);
  }
  return profiles.filter((p) => p.phone);
};
