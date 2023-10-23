"use client";
import TryNow from "./components/tryNow";
import Product from "./components/product";
import Footer from "./components/footer";
import { Box, Heading, Grid, Stack } from "@twilio-paste/core";
import COOKIES from "./components/cookies";
import { analytics } from "./analytics";
import { Theme } from "@twilio-paste/core/theme";

export default function Home() {
  analytics.page();
  return (
    <>
      <Theme.Provider theme="default">
        <TryNow />
        <Box className="store">
          <Heading as="h1" variant="heading10">
            Welcome to the bakery
          </Heading>
          <center>
            <div className="categories">
              <Heading as="h2" variant="heading20">
                NEW Flavors
              </Heading>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Heading as="h2" variant="heading20">
                Popular
              </Heading>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Heading as="h2" variant="heading20">
                Feature
              </Heading>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Heading as="h2" variant="heading20">
                Specials
              </Heading>
            </div>
          </center>
          <Box margin="auto">
            <Stack orientation="horizontal" spacing="space60">
              {Object.keys(COOKIES).map((cookie) => (
                <Product key={cookie} product={COOKIES[cookie]} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Footer pagination />
      </Theme.Provider>
    </>
  );
}