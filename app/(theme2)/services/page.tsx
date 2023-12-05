"use client";
import { bulb } from "@/public";
import { FC } from "react";
import { RxCrop, RxDesktop, RxPencil2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

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
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: <RxDesktop />,
    },
  ];

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:justify-start lg:items-center lg:gap-x-2  mt-10 relative lg:mt-24 justify-center container ">
        <div className="w-full">
          <h3 className="text-4xl md:text-6xl   font-medium ">
            What I Offer <span className="font-bold text-rose-500">.</span>{" "}
          </h3>
          <div className="max-w-sm my-4">
            <h4>My services</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, quaerat neque ducimus iste accusantium ipsa sapiente.
              Quibusdam ipsum nobis dolorem, adipisci excepturi praesentium
              voluptas doloribus quia. Architecto repellat nesciunt quidem!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] mb-20 flex lg:my-0  mt-1">
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
            className="w-full h-full"
            modules={[Navigation, Pagination]}
            freeMode={true}
            pagination={{
              clickable: true,
            }}>
            {serviceData.map((item) => (
              <SwiperSlide
                className="w-full flex items-start rounded-lg py-8  lg:py-12 cursor-pointer my-1"
                key={item.title}>
                <div className="bg-slate-900 opacity-90 relative gap-y-1 group lg:gap-y-4 backdrop-blur-sm lg:h-[220px] md:h-[200px]  justify-center h-[170px]  lg:flex flex-col w-full p-6 ">
                  <div className="absolute top-4  group-hover:text-rose-500 transition-all duration-300 right-12 rotate-180 group-hover:translate-x-4">
                    <FaArrowLeft />
                  </div>
                  <span className="my-4 lg:m-0 text-rose-500 text-2xl">
                    {item.icons}
                  </span>{" "}
                  <h3 className="my-4 lg:m-0">{item.title}</h3>{" "}
                  <p className="my-4 lg:m-0">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Image
          src={bulb}
          alt="icon"
          className="animate-pulse absolute  w-44 -left-32 lg:-left-72  2xl:hidden bottom-0 mix-blend-color-dodge duration-[2.5s] "
        />
      </section>
    </>
  );
};

export default Services;
