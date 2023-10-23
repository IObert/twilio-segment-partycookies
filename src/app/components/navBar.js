"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";
import { Theme } from "@twilio-paste/core/theme";
import Image from "next/image";

export default function NavBar() {
  let user = null;

  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const storage = localStorage.getItem("user");
    user = JSON.parse(storage);
  }
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
              />
            </Link>

            <Link className={pathName == "/" ? "active" : ""} href="/">
              Home
            </Link>
            {!user && (
              <Link
                className={pathName == "/rewards" ? "active" : ""}
                href="/rewards"
              >
                Rewards
              </Link>
            )}
            {user && (
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
