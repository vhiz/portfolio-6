import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Ai Camera",
          link: "https://ai-camera-puce.vercel.app/",
          path: "/camera.jpg",
        },
        {
          title: "Blog",
          link: "https://blog-nexjs-vhizs-projects.vercel.app/",
          path: "/blog.jpg",
        },
        {
          title: "Chat-app",
          link: "https://chat-app-e90d6.web.app/",
          path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtYpsCTrZuvyds1rYGF2XC_A8_DC-gjfNYjV0MWYUjA&s",
        },
        {
          title: "Tour Website",
          link: "https://tour-app-898fe.web.app",
          path: "/music.png",
        },
      ],
    },
    {
      images: [
        {
          title: "FlexiSAF Landing Page",
          link: "https://landing-page-5aef3.web.app/",
          path: "https://firebasestorage.googleapis.com/v0/b/landing-page-5aef3.appspot.com/o/Flexisaf.png?alt=media&token=9a3046cf-f329-4e6f-8208-34983985595c",
        },
        {
          title: "Social App",
          link: "https://github.com/vhiz/aura-mobile",
          path: "/social.avif",
        },
        {
          title: "Movie App",
          link: "https://github.com/vhiz/movie-mobile",
          path: "/movie.jpg",
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
      className="h-[280px] sm:h-[480px]"
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
                  <img
                    src={img.path}
                    alt=""
                    className="w-[500px] h-[100px] object-cover xl:h-[200px] md:h-[200px] "
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
