import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/css/globals.css";
import { AppDataProvider } from "@/context/context";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrinkk",
  description: "Built for shrinkking Patience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppDataProvider>
          <Navbar />
          <div className="lg:mx-44 md:mx-10 ">
            {children}
          </div>
        </AppDataProvider>
      </body>
    </html>
  );
}
