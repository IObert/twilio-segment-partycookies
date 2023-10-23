import { Button, Column, Grid, Box } from "@twilio-paste/core";
import Image from "next/image";

export default function TryNow() {
  return (
    <>
      <Grid>
        <Column span={5} offset={1}>
          <Box className="try-now-text hero">
            <h1>Love at first bite</h1>
            <p>
              &quot;Whether it is your first party or your third party, these
              cookies are for you!&quot;
            </p>
            <Button variant="primary">TRY NOW</Button>
          </Box>
        </Column>
        <Column span={4}>
          <Image
            className="try-now-image hero"
            src="/frontpage.png"
            alt="cookies"
            height="606"
            width="637"
          />
        </Column>
      </Grid>
      <Grid className="mobile-hero">
        <Column span={2} offset={3}>
          <Image
            className="mobile-hero"
            src="/logo.png"
            alt="Party Cookies Logo"
            height="88"
            width="202"
          />
        </Column>
      </Grid>
    </>
  );
}
