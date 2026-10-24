import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Avinash Chaudhary — Digital Marketer",
  description:
    "Building brands, driving growth and creating digital impact through performance marketing, social media, SEO and conversion-focused websites.",
  metadataBase: new URL("https://avinashchaudhary.com"),
  openGraph: {
    title: "Avinash Chaudhary — Digital Marketer",
    description: "Building brands. Driving growth. Creating digital impact.",
    type: "website",
    url: "https://avinashchaudhary.com",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
