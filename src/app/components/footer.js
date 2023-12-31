"use client";
import React from "react";
import Image from "next/image";
import { Box, Stack, Button } from "@twilio-paste/core";
import { Theme } from "@twilio-paste/core/theme";
import dynamic from "next/dynamic";
const CookieDialog = dynamic(() => import("./cookieDialog"), { ssr: false });

export default function Footer({ pagination }) {
  const [cookieDialogOpen, setCookieDialogOpen] = React.useState();

  const openCookieDialog = () => setCookieDialogOpen(true);
  const closeCookieDialog = () => setCookieDialogOpen(false);

  return (
    <Theme.Provider theme="default">
      <div className="pagination">
        {pagination && (
          <center>
            <Image
              src="/pagination.png"
              alt="Pagination"
              height="104"
              width="156"
            />
          </center>
        )}
      </div>
      <div className="footer">
        <center>
          <Image src="/footer.png" alt="footer" width="1218" height="375" />
        </center>
      </div>
      <Box className="cookie-settings-button">
        <Stack
          element="FOOTER"
          orientation="horizontal"
          style={{ width: "100%" }}
        >
          <p>Copyright © 2022 Twilio, Inc.</p>
          <p>&nbsp;</p>
          <Button variant="link" onClick={openCookieDialog}>
            Cookie Settings
          </Button>
        </Stack>
      </Box>
      <CookieDialog open={cookieDialogOpen} onClose={closeCookieDialog} />
    </Theme.Provider>
  );
}
