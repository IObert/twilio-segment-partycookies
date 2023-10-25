"use client";
import Footer from "../components/footer";
import Product from "../components/product";
import COOKIES from "../components/cookies";
import { Box, Heading, Grid, Column } from "@twilio-paste/core";
import { useEffect, useState } from "react";
import { getUserId } from "../components/analytics";

export default function Account() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const userId = await getUserId();

      if (userId !== null) {
        const res = await fetch("/api/faveCookie", {
          method: "POST",
        });
        const { faveCookie } = await res.json();
        console.log(userId, faveCookie);
        setUser({ userId, faveCookie });
      }
    };
    getUser();
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
          {user.faveCookie && (
            <Product product={COOKIES[user.faveCookie] || {}} discount />
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
