import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {draftMode().isEnabled && (
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
        )}
        <main>{children}</main>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
