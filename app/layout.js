/* eslint-disable @next/next/no-head-element */
import localFont from '@next/font/local';

const myFont = localFont({ src: '../assets/FoundersGrotesk-Regular.otf' });



export default function RootLayout({ children }) {
  return (
    <html  >
      <head></head>
      <body className={myFont.className} >{children}</body>
    </html>
  );
}
