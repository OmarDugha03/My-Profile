import "../(main)/globals.css";
import NabBar from "@/components/NabBar";
import SideBar from "@/components/SideBar";
import TranComp from "@/components/TranComp";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"  text-white bg-site  bg-cover w-full h-full"}>
        <div className="text-white bg-site   bg-cover w-full h-full">
          <TranComp />
          <NabBar />
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
