/* eslint-disable @next/next/no-head-element */
import localFont from "@next/font/local";
import "../styles/globals.css";
const myFont = localFont({ src: "../fonts/FoundersGrotesk-Regular.otf" });

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
      </head>
      <head>
        <title>Fomo Sapiens NFT</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta
          name="description"
          content="Fomo Sapiens is a large story-telling pfp NFT collection sitting on Solana network."
          key="desc"
        />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
