import { Oswald } from '@next/font/google';

// Oswald is the font that we use
const oswald = Oswald();

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={oswald.className}>
    <head> </head>
    <body>{children} </body>
  </html>
);

export default RootLayout;
