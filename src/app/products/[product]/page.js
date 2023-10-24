"use client";
// import * as React from "react";
import { useState } from "react";
import { Button, Alert, Column, Grid, Box } from "@twilio-paste/core";
import COOKIES from "../../components/cookies";
import { Heading } from "@twilio-paste/core/heading";
import { Theme } from "@twilio-paste/core/theme";
import Image from "next/image";
// import Analytics from "../../components/analytics";
import { analytics, track } from "../../components/analytics";

export default function Product({ params }) {
  const [notifications, setNotifications] = useState([]);
  const product = COOKIES[params.product];

  function orderCookie() {
    console.log("cookie ordered");

    track("Order Completed", {
      total: product.price,
      currency: "USD",
      products: [product],
    });

    setNotifications(
      notifications.concat(OrderNotification(product, notifications.length)),
    );
  }

  return (
    <Theme.Provider theme="default">
      <Heading as="h1" variant="heading10">
        {product.name}
      </Heading>
      <Grid>
        <Column span={4} offset={2} margin="auto">
          <Box margin="auto">
            <Image
              src={product.image}
              alt={product.name}
              height="424"
              width="257"
            />
          </Box>
        </Column>
        <Column span={4}>
          <Box className="try-now-text hero">
            <p>{product.description}</p>
            <Button onClick={orderCookie} variant="primary">
              Order
            </Button>
            <Box margin="space-100" className="alert">
              {notifications}
            </Box>
          </Box>
        </Column>
      </Grid>
      <Box className="try-now-text mobile-hero">
        <center>
          <Button onClick={orderCookie} variant="primary">
            Order
          </Button>
          <Box margin="space-100" className="alert">
            {notifications}
          </Box>
          <p>{product.description}</p>
        </center>
      </Box>
      <analytics />
    </Theme.Provider>
  );
}

function OrderNotification(product, key) {
  return (
    <Alert key={key} variant="neutral">
      <strong>{product.name}</strong> Ordered
    </Alert>
  );
}
