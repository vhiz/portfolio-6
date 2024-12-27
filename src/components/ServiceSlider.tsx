import "swiper/swiper-bundle.css";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { TfiWrite } from "react-icons/tfi";
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Hosting",
    description: "Your sites will be hosted on working with me",
  },
  {
    icon: <RxPencil2 />,
    title: "RESPONSIVE WEB DESIGN",
    description: "I offer clean and interractable responsive websites",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I use diffrent technologies to ensure clean and dynamic web apps",
  },
  {
    icon: <RxReader />,
    title: "LANDING PAGES",
    description:
      "I create simple and easy to use landing page for your business",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Be able to find your site anywhere in the world",
  },
  {
    icon: <TfiWrite />,
    title: "Content Writing",
    description: "Easy to understand documentation when using my services",
  },
];

export default function ServiceSlider() {
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
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 justify-between sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] min-h-[19.5rem] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            <div className="mb-8">
              <div className="mb-2 text-lg uppercase">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
