import '../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head> </head>
    <body>{children} </body>
  </html>
);

export default RootLayout;
