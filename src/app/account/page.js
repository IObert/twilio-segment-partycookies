"use client";
import Footer from "../components/footer";
import Product from "../components/product";
import COOKIES from "../components/cookies";
import { Box, Heading, Grid, Column } from "@twilio-paste/core";
import { useEffect, useState } from "react";

export default function Account() {
  let storageUser = {};
  if (typeof window !== "undefined") {
    storageUser = JSON.parse(localStorage.getItem("user"));
  }
  const [user, setUser] = useState(storageUser);

  useEffect(() => {
    fetch("/api/faveCookie", {
      method: "POST",
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then(({ faveCookie }) => {
        setUser({ ...user, faveCookie });
      });
  }, []);

  return (
    <>
      <Box className="store">
        <Heading as="h1" variant="heading10">
          Welcome to your personalised bakery
        </Heading>
        <center>
          <div className="categories">
            <Heading as="h2" variant="heading20">
              Your Flavours
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
        <Box margin="auto" maxWidth="75%" textAlign="center">
          <Product product={COOKIES[user.faveCookie] || {}} discount />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

const getFaveCookie = async (user) => {};
