"use client";
import { FC } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  const testimonialData = [
    {
      image: "/t-avt-1.png",
      name: "Anne Smith",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
      image: "/t-avt-2.png",
      name: "Jane Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
      image: "/t-avt-3.png",
      name: "Jhon Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
  ];

  return (
    <section className="container w-full mb-20 items-center justify-center lg:mt-20 flex">
      <Swiper
        className="w-full h-full  container-none"
        modules={[Navigation, Pagination]}
        freeMode={true}
        slidesPerView={1}
        navigation
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}>
        {testimonialData.map((item) => (
          <SwiperSlide
            className=" flex items-center lg:justify-between text-center rounded-lg py-8   lg:py-12 cursor-pointer my-1"
            key={item.name}>
            <div className="my-12 flex lg:flex-row  flex-col justify-center lg:justify-evenly  items-center gap-y-3 ">
              <div className="flex flex-col justify-center   gap-x-4  items-center">
                <Image src={item.image} alt="avatar" width={100} height={100} />
                <span className="text-left lg:text-5xl text-3xl font-medium">
                  {item.name}
                </span>
                <span className="text-red-500 lg:text-4xl font-medium hidden lg:block text-2xl">
                  {item.position}
                </span>
              </div>
              <span className="text-red-500 font-medium lg:hidden text-2xl">
                {item.position}
              </span>
              <div className="w-[1px] hidden lg:block top-28 left-[300px] 2xl:left-[400px] h-[50%] absolute bg-white/40" />

              <p className="text-center b relative lg:max-w-3xl lg:text-4xl  md:w-[70%] w-[300px]">
                <FaQuoteLeft className="absolute te text-white/40 left-0 text-2xl  -top-8" />{" "}
                {item.message}
                <FaQuoteRight className="absolute text-white/40 right-0 text-2xl -bottom-8" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
