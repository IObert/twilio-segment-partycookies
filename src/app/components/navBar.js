"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";
import { Theme } from "@twilio-paste/core/theme";
import Image from "next/image";
import { getUserId } from "./analytics";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = await getUserId();
      setUser(userId);
    };
    getUser();
  }, []);

  let pathName = usePathname();

  return (
    <>
      <Theme.Provider theme="default">
        <div className="sale-banner">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>Call Us: +8800701-800300</td>
                <td style={{ textAlign: "center" }}>
                  Take 30% off when you spend $99 or more with code:
                  &quot;HappyCookie&quot;. <u>More details</u>
                </td>
                <td style={{ textAlign: "right" }}>
                  Facebook &nbsp;&nbsp; Twitter &nbsp;&nbsp; Instagram
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Box marginBottom="space50" className="NavBar">
          <Stack
            element="NAVBAR"
            orientation="horizontal"
            spacing="space40"
            style={{ width: "100%" }}
          >
            <Link href="/">
              <Image
                className="logo"
                src="/logo.png"
                alt="Party Cookies Logo"
                height="90"
                width="200"
              />
            </Link>

            <Link className={pathName == "/" ? "active" : ""} href="/">
              Home
            </Link>
            {user == null && (
              <Link
                className={pathName == "/rewards" ? "active" : ""}
                href="/rewards"
              >
                Rewards
              </Link>
            )}
            {user !== null && (
              <Link
                className={pathName == "/account" ? "active" : ""}
                href="/account"
              >
                My Favourites
              </Link>
            )}
            <Link
              className={pathName == "/order" ? "active" : ""}
              href="/order"
            >
              Order Online
            </Link>
          </Stack>
        </Box>
      </Theme.Provider>
    </>
  );
}
