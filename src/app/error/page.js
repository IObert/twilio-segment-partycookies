"use client";
import { Box, Heading, Button } from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/theme";
import { useEffect } from "react";
export default function Error() {
  function createError() {
    console.error("An Error in a live Demo!! How scary");
    if (typeof window !== "undefined" && typeof Sentry !== "undefined") {
      console.log(
        Sentry.captureException("An Error in a live Demo!! How Scary"),
      );
    }
  }
  return (
    <>
      <Theme.Provider theme="default">
        <Box className="store">
          <Heading as="h1" variant="heading10">
            This page triggers an error
          </Heading>
          <center>
            <Button onClick={createError}>Create Error</Button>
          </center>
        </Box>
      </Theme.Provider>
    </>
  );
}
