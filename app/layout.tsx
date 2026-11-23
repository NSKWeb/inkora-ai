import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Inkora AI — Research. Write. Publish.",
    template: "%s | Inkora AI"
  },
  description:
    "An AI-powered research and writing studio for thoughtful, evidence-aware, search-ready articles.",
  applicationName: "Inkora AI"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
