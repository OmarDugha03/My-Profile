"use client";
import { bulb } from "@/public";
import { FC } from "react";
import { RxCrop, RxDesktop, RxPencil2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../components/MotionVars";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  const serviceData = [
    {
      title: "Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxCrop />,
    },
    {
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxPencil2 />,
    },
    {
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxPencil2 />,
    },
    {
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxPencil2 />,
    },
    {
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxPencil2 />,
    },
    {
      title: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxDesktop />,
    },
  ];

  return (
    <>
      <section className="flex flex-col   mt-10 relative justify-center container ">
        <div>
          <h3 className="text-4xl md:text-6xl lg:text-7xl  font-medium ">
            What I Offer <span className="font-bold text-rose-500">.</span>{" "}
          </h3>
          <div className="max-w-md my-4">
            <h4>My services</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, quaerat neque ducimus iste accusantium ipsa sapiente.
              Quibusdam ipsum nobis dolorem, adipisci excepturi praesentium
              voluptas doloribus quia. Architecto repellat nesciunt quidem!
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-full mb-4  mt-4">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1000: {
                  spaceBetween: 8,
                  slidesPerView: 3,
                },
              }}
              className="w-full "
              modules={[Navigation, Pagination]}
              freeMode={true}
              pagination={{
                clickable: true,
              }}>
              {serviceData.map((item) => (
                <SwiperSlide
                  className="w-full  rounded-lg py-12 cursor-pointer my-1"
                  key={item.title}>
                  <div className="bg-slate-900 opacity-90 backdrop-blur-sm   h-[180px] lg:max-w-[200px] lg:flex flex-col w-full p-6 ">
                    <span>{item.icons}</span> <h3>{item.title}</h3>{" "}
                    <p>{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="relative lg:hidden">
          <Image
            src={bulb}
            alt="icon"
            className="animate-pulse absolute -z-10 w-44 -left-32 lg:-left-72  2xl:hidden -bottom-56 mix-blend-color-dodge duration-[2.5s] "
          />
        </div>
      </section>
    </>
  );
};

export default Services;
