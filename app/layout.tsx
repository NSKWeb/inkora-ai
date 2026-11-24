import type { Metadata } from "next";
import "./globals.css";

// Runs before paint so the stored theme (or the OS preference) applies
// without a light flash; the toggle in app/theme-toggle.tsx keeps it in sync.
const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

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
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
