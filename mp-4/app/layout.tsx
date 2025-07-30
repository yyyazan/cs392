import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Boldonse&family=Noto+Music&display=swap" rel="stylesheet" />
      </head>
      <body>
      {children}
      </body>
      </html>
  );
}
