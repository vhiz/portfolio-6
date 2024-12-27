import "swiper/swiper-bundle.css";

import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "./Image";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Ai Camera",
          link: "https://ai-camera-puce.vercel.app/",
          path: "camera",
        },
        {
          title: "Blog",
          link: "https://blog-nexjs-vhizs-projects.vercel.app/",
          path: "blog",
        },
        {
          title: "Chat-app",
          link: "https://chat-app-e90d6.web.app/",
          path: "chat",
        },
        {
          title: "Tour Website",
          link: "https://tour-app-898fe.web.app",
          path: "music",
        },
      ],
    },
    {
      images: [
        {
          title: "FlexiSAF Landing Page",
          link: "https://landing-page-5aef3.web.app/",
          path: "Flexisaf",
        },
        {
          title: "Vhiz Ai",
          link: "https://vhiz-ai.onrender.com/dashboard",
          path: "Ai",
        },
        {
          title: "Social App",
          link: "https://github.com/vhiz/aura-mobile",
          path: "social",
        },
        {
          title: "Movie App",
          link: "https://github.com/vhiz/movie-mobile",
          path: "movie",
        },
      ],
    },
    {
      images: [
        {
          title: "Chimoney Bank App",
          link: "https://chimoney-bank-app.vercel.app",
          path: "Bank",
        },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[15rem] sm:h-[25rem] xl:h-[30rem]"
    >
      {workSlides.slides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
            {item.images.map((img, i) => (
              <a
                href={img.link}
                target="blank"
                key={i}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src={img.path}
                    lazy
                    className="w-[500px] h-[100px] object-cover md:h-[200px] "
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100 uppercase">{img.title}</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        DEMO
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
