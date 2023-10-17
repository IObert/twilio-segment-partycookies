import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import * as snippet from "@segment/snippet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Party Cookies",
  description: "Demo app for Signal EMEA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function renderSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      page: true,
    };

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b  from-gray-300 to-white overflow-scroll">
          {children}
        </div>
      </body>

      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
    </html>
  );
}
