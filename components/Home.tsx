"use client";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./MotionVars";

const Home = ({}) => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row relative lg:items-center lg:mt-16 2xl:mt-44  2xl:justify-between 2xl:gap-x-40  container lg:gap-x-20">
      <div
        className="flex flex-col md:items-center lg:justify-between lg:items-start
   ">
        <m.h1
          variants={fadeIn("left", 0.4)}
          animate="show"
          initial="hidden"
          className="text-2xl lg:text-5xl 2xl:text-7xl 2xl:max-w-5xl 2xl:leading-[90px] 2xl:-ml-4 font-bold tracking-wider mt-12 lg:mt-0 max-w-2xl   lg:leading-snug  lg:text-left subpixel-antialiased leading-10 decoration-2">
          Transforming Ideas Into
          <span className="text-rose-500 font-extrabold ms-2">
            Digital Reality
          </span>
        </m.h1>
        <m.p
          variants={fadeIn("left", 0.4)}
          animate="show"
          initial="hidden"
          className="font-medium 2xl:-ml-4 mt-8 lg:mt-16 tracking-wide text-base max-w-lg lg:text-xl">
          Build high quality web apps using the modern web technologies such as
          &nbsp;
          <span className="text-rose-500 font-bold text-lg lg:text-2xl">
            Next JS &nbsp;
          </span>
          ,
          <span className="text-rose-500 font-bold text-lg lg:text-2xl">
            Tailwind CSS &nbsp;
          </span>
          and
          <span className="text-rose-500 font-bold text-lg lg:text-2xl">
            &nbsp; Typescript.
          </span>
        </m.p>
        {/* Image Trans */}
        <m.div
          variants={fadeIn("up", 0.4)}
          animate="show"
          initial="hidden"
          className="rounded-full mb-20 mt-12  bg-white border-rose-600 w-fit h-fit shadow-lg border-2">
          <Image
            src="/omar.png"
            className=" items-center 2xl:w-[600px] rounded-full lg:hidden  "
            alt="person"
            width={400}
            height={400}
          />
        </m.div>
      </div>
      <m.div
        variants={fadeIn("up", 0.4)}
        animate="show"
        initial="hidden"
        className="rounded-full  bg-white border-rose-600 w-fit h-fit shadow-lg border-2">
        <Image
          priority
          src="/omar.png"
          className=" hidden items-center 2xl:w-[600px] rounded-full lg:flex "
          alt="person"
          width={400}
          height={400}
        />
      </m.div>
    </m.section>
  );
};

export default Home;
