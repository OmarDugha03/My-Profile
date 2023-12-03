"use client";
import { FC } from "react";
import { RxCrop, RxDesktop, RxPencil2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";

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
          spaceBetween: 5,
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
  );
};

export default Services;
