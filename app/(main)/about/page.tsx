"use client";
/* eslint-disable react/jsx-key */
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";
interface AboutProps {}
import { SiTailwindcss, SiTypescript } from "react-icons/si";

import { FaGithub, FaNpm } from "react-icons/fa";
import { frontend, sfw } from "@/public";
import Image from "next/image";
import { motion as m } from "framer-motion";
const About: FC<AboutProps> = ({}) => {
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          imgs: [
            <FaHtml5 className="hover:text-rose-500 transition-all duration-500" />,
            <FaCss3 className="hover:text-rose-500 transition-all duration-500" />,
            <FaJs className="hover:text-rose-500 transition-all duration-500" />,
            <FaReact className="hover:text-rose-500 transition-all duration-500" />,
            <SiNextdotjs className="hover:text-rose-500 transition-all duration-500" />,
            <SiFramer className="hover:text-rose-500 transition-all duration-500" />,
            <SiTailwindcss className="hover:text-rose-500 transition-all duration-500" />,
            <SiTypescript className="hover:text-rose-500 transition-all duration-500" />,
            <FaGithub className="hover:text-rose-500 transition-all duration-500" />,
            <FaNpm className="hover:text-rose-500 transition-all duration-500" />,
          ],
          desc: "Build high quality apps using the modern web technologies such as Next js , Tailwind CSS and Typescript",
        },
      ],
    },
    {
      title: "Certificates",
      info: [
        {
          title: "Applied Software Engineering Fundamentals ",
          desc: `here is the Link `,
          imgs: <Image src={sfw} alt="icon" className="w-" />,
        },
        {
          title: "Meta Frontend Developer provisional",
          imgs: <Image src={frontend} alt="ce" className="w-" />,
          desc: "sdads",
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "BookMark Manager",
          imgs: "2012 - 2023",
          desc: "",
        },
        {
          title: "Easybank landing page",
          imgs: "2010 - 2012",
          desc: "",
        },
        {
          title: "Intern - DEF Corporation",
          imgs: "2008 - 2010",
          desc: "",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-start container mt-8">
      <h2 className="font-bold text-3xl  mb-4 mt-8">
        About Me <span className="text-rose-600">: </span>
        <p className="max-w-2xl font-medium leading-relaxed my-5 tracking-wider">
          I am a{" "}
          <span className="font-black text-rose-600">Frontend Developer</span>,
          excepturi dignissimos reiciendis quod beatae fuga possimus repellat
          laudantium, veniam atque rem et, omnis cumque culpa officiis! Soluta,
          distinctio.
        </p>
      </h2>
      <Tabs defaultValue="skills">
        <TabsList className="flex flex-wrap  gap-x-8  ls:gap-x-12 md:gap-x-20  items-start">
          {aboutData.map((item) => (
            <TabsTrigger
              key={item.title}
              value={item.title}
              className="lg:font-extrabold lg:text-3xl my-1">
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {aboutData.map((item) => (
          <TabsContent className="mt-20" value={item.title} key={item.title}>
            {item.info.map((i) => (
              <m.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                key={i.title}>
                <h3 className="font-bold text-center lg:text-left lg:text-4xl tracking-wider bg-white bg-opacity-90 rounded-full backdrop-blur-sm w-fit p-4 opacity-80  text-2xl text-rose-600">
                  {i.title}
                </h3>
                <p className="my-8 text-lg lg:text-2xl lg:tracking-wider lg:leading-relaxed tracking-wide lg:max-w-md">
                  {i.desc}
                </p>
                <p className="flex lg:text-4xl lg:gap-x-8 transition-all duration-500 flex-wrap gap-x-5 gap-y-8 text-2xl mb-20 mt-4">
                  {i.imgs}
                </p>
              </m.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default About;
