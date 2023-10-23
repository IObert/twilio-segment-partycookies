import { Button, Grid, Column, Box } from "@twilio-paste/core";
import LoginModal from "./loginModal";
export default function Rewards() {
  return (
    <>
      <Grid>
        <Column span={8} offset={2}>
          <Box className="try-now-text" textAlign="center">
            <h1>Join our Rewards Program</h1>
            <p>
              Earn Smiles every time you shop, unlock discounts, and pick a free
              Cookie on your birthday!
            </p>
            <LoginModal variant="primary">Sign Up Now</LoginModal>
          </Box>
        </Column>
      </Grid>
    </>
  );
}
