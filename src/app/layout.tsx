import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Next.js Comments App",
  description: "Show posts and comments with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex justify-center p-6">
        <div className="w-full max-w-4xl">
          <header className="mb-8 flex items-center justify-between">
            <Link href="/">
              <h1 className="text-3xl font-bold text-green-700 hover:text-green-600 transition">
                📘 Posts & Comments
              </h1>
            </Link>
            <nav>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Home
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
