"use client";
import NavBar from "../../components/navBar";
import TryNow from "../../components/tryNow";
import Product from "../../components/product";
import Footer from "../../components/footer";
import { Box, Heading } from "@twilio-paste/core";

export default function ProductLayout({ children }) {
  return (
    <>
      <Box className="store">{children}</Box>
      <Footer />
    </>
  );
}
