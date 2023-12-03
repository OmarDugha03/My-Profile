"use client";
import { AnimatePresence, motion as m } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const transValue = {
  init: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const TranComp = () => {
  const path = usePathname();
  useEffect(() => {}, [path]);
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => console.log("Exit animation completed")}>
      <m.div
        className="fixed top-0 bottom-0 right-full  w-screen h-screen z-50 bg-fuchsia-950"
        variants={transValue}
        initial="init"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
        exit="exit"></m.div>
      <m.div
        className="fixed top-0 bottom-0 right-full  w-screen h-screen z-30  bg-violet-800"
        variants={transValue}
        initial="init"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        exit="exit"></m.div>
      <m.div
        className="fixed top-0 bottom-0 right-full  w-screen h-screen z-10  bg-pink-700"
        variants={transValue}
        initial="init"
        animate="animate"
        transition={{ duration: 0.6, delay: 0, ease: "easeInOut" }}
        exit="exit"></m.div>
    </AnimatePresence>
  );
};

export default TranComp;
