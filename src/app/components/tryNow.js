import { Button, Column, Grid, Box } from "@twilio-paste/core";

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
          <img className="try-now-image hero" src="frontpage.png" />
        </Column>
      </Grid>
      <Grid className="mobile-hero">
        <Column span={2} offset={3}>
          <img
            className="mobile-hero"
            src="/logo.png"
            alt="Party Cookies Logo"
          />
        </Column>
      </Grid>
    </>
  );
}
