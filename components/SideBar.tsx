"use client";
import {
  Home,
  Kanban,
  LayoutPanelLeft,
  Mail,
  MessagesSquare,
  User,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const SideBar = () => {
  const activeSegment = useSelectedLayoutSegment();

  const sideData = [
    {
      name: "home",
      path: "/",
      icon: <Home />,
    },
    {
      name: "about",
      path: "/about",
      icon: <User />,
    },
    {
      name: "services",
      path: "/services",
      icon: <LayoutPanelLeft />,
    },
    {
      name: "work",
      path: "/work",
      icon: <Kanban />,
    },
    {
      name: "testimonials",
      path: "/testimonials",
      icon: <MessagesSquare />,
    },
    {
      name: "contact",
      path: "/contact",
      icon: <Mail />,
    },
  ];
  return (
    <>
      {/* For mobile  */}
      <aside className="fixed lg:hidden bottom-0 px-2  bg-opacity-70 ls:px-12  z-30 bg-slate-600  backdrop-blur-sm   flex h-max w-full justify-between">
        {sideData.map((item) => (
          <Link
            key={item.name}
            className={clsx("mx-1 my-4 2xl:px-2")}
            href={item.path}>
            <TooltipProvider>
              <Tooltip delayDuration={850}>
                <TooltipTrigger>
                  {" "}
                  <p
                    className={clsx(
                      "hover:text-rose-500 transition-all duration-200 delay-100",
                      activeSegment === item.name ? "text-rose-500" : ""
                    )}>
                    {item.icon}
                  </p>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </aside>
      {/* For Desctop  */}

      <aside className="fixed hidden  opacity-80 gap-2  items-center  top-48 2xl:top-72 2xl:right-12 right-5 rounded-full    bg-slate-600 backdrop-blur-sm flex-col  lg:flex h-max w-fit justify-between ">
        {sideData.map((item) => (
          <Link key={item.name} className="mx-3 py-3 " href={item.path}>
            <TooltipProvider>
              <Tooltip delayDuration={850}>
                <TooltipTrigger>
                  <p
                    className={clsx(
                      "hover:text-rose-500 transition-all duration-200 delay-100",
                      activeSegment === item.name ? "text-rose-500" : ""
                    )}>
                    {item.icon}
                  </p>
                </TooltipTrigger>
                <TooltipContent side="left" align="center">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default SideBar;
