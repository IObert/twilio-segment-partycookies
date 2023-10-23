"use client";
import NavBar from "../components/navBar";
import Rewards from "../components/rewards";
import Product from "../components/product";
import Footer from "../components/footer";
import { Box, Heading, Grid } from "@twilio-paste/core";
import COOKIES from "../components/cookies";
import { analytics } from "../analytics";

export default function Home() {
  analytics.page();
  return (
    <>
      <Rewards />

      <Footer />
    </>
  );
}
