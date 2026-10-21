
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HackyTech Universe",
    template: "%s | HackyTech Universe",
  },
  description:
    "Enter the HackyTech Universe — explore intelligent systems, interactive technology, and working demonstrations built for the future.",
  applicationName: "HackyTech Universe",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HackyTech",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050811",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
