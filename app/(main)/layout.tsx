import { Inter } from "next/font/google";
import "./globals.css";
import NabBar from "@/components/NabBar";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import Image from "next/image";
import TranComp from "@/components/TranComp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Dugha",
  description: "Frontend Developer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className + "  text-white bg-site  bg-cover w-full h-full"
        }>
        <Image
          src="/top-left-img.png"
          alt="effect"
          width={400}
          height={400}
          className="absolute top-0 -z-10 md:top-0 ls:left-0 lg:right-0 right-12  mix-blend-color-dodge"
        />

        <TranComp />
        <NabBar />
        <SideBar />

        {children}

        <div className="hidden lg:block absolute bg-explosion w-full h-full   bg-no-repeat bg-cover bg-right top-0 left-28 -z-20 mix-blend-color-dodge" />
      </body>
    </html>
  );
}
