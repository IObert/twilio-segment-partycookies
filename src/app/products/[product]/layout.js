"use client";

import Footer from "../../components/footer";
import { Box } from "@twilio-paste/core";

export default function ProductLayout({ children }) {
  return (
    <>
      <Box className="store">{children}</Box>
      <Footer />
    </>
  );
}
