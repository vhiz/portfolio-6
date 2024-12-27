import Image from "../components/Image";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiRedux,
  SiSqlite,
} from "react-icons/si";
import CountUp from "react-countup";
import { useState } from "react";
import { FaSailboat } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import Seo from "../components/Seo";

export default function About() {
  const [index, setIndex] = useState(0);
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Frontend Development",
          icons: [
            {
              icon: <FaHtml5 />,
              name: "HTML",
            },
            {
              icon: <FaCss3 />,
              name: "CSS",
            },
            {
              icon: <FaJs />,
              name: "JAVASCRIPT",
            },
            {
              icon: <FaReact />,

              name: "REACT JS",
            },
            {
              icon: <SiNextdotjs />,

              name: "NEXT JS",
            },
            {
              icon: <SiFramer />,

              name: "FRAMER",
            },
            {
              icon: <FaWordpress />,

              name: "WORD PRESS",
            },
            {
              icon: <FaSailboat />,

              name: "SAILS JS",
            },
            {
              icon: <SiRedux />,

              name: "REDUX",
            },
          ],
        },
        {
          title: "Backend Development",
          icons: [
            {
              icon: <SiExpress />,

              name: "EXPRESS JS",
            },
            {
              icon: <SiJavascript />,

              name: "JAVASCRIPT",
            },
            {
              icon: <FaSailboat />,

              name: "SAILS JS",
            },
            {
              icon: <SiMongodb />,

              name: "MONGO DB",
            },
            {
              icon: <SiJsonwebtokens />,

              name: "JWT",
            },
            {
              icon: <SiSqlite />,

              name: "SQL",
            },
          ],
        },
        {
          title: "Mobile Development",
          icons: [
            {
              icon: <RiReactjsFill />,

              name: "REACT NATIVE",
            },
          ],
        },
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title: "B.Engr - Caritas University, Enugu, Amorji-Nike",
          stage: "2011",
        },
      ],
    },
  ];
  return (
    <div className="h-full">
      <Seo
        title="Mgbeahurike Victor- Software Developer - About"
        description="I don't only build
Websites I solve
problems. Frontend Development
Backend Development
Mobile Development Bachelors Degree.Computer Engineering - Caritas University, Enugu, Amorji-Nike"
        url="https://portfolio-49f29.web.app/about"
        image="https://ik.imagekit.io/pokwil20g/home"
        siteName="Mgbeahurike Victor"
      />
      <div className="mix-blend-color-dodge w-60 animate-pulse animate-infinite xl:w-72 absolute bottom-0 right-0">
        <Image lazy src="circles" />
      </div>
      <div className="absolute bottom-0 -left-80 opacity-70 animate-fade-right">
        <Image
          lazy
          src="avatar"
          className="translate-x-0 max-w-[48rem] max-h-[40rem] object-cover"
        />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center xl:flex-row gap-6 overflow-hidden">
        <div className="flex flex-col lg:flex-1 z-10 gap-y-7 mt-6">
          <p className="text-3xl md:text-6xl mb-8 font-semibold text-center xl:text-start capitalize animate-fade-down">
            I don't only build <br />
            <span className="text-accent">Websites</span> I solve <br />{" "}
            problems.
          </p>
          <div className="md:flex hidden items-center gap-4 animate-fade-down animate-delay-500">
            <div className="flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={6} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={57} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Satisfied Clients
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={38} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished Projects
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col gap-4 animate-fade-left">
          <div className="flex items-center justify-center lg:justify-normal gap-4 text-lg">
            {aboutData.map((item, i) => {
              const active = index === i;
              return (
                <button
                  onClick={() => setIndex(i)}
                  className={`text-lg btn btn-sm md:btn-md btn-ghost capitalize  ${
                    active ? "btn-active text-accent" : ""
                  }`}
                  key={i}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start font-medium animate-fade-left">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col font-poppins md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="mb-2 md:mb-0">{item.title}</div>
                <div className="flex gap-x-4 flex-wrap">
                  {('icons' in item) && item.icons.map((icon: { icon: React.ReactNode; name: string }, i: number) => (
                    <div className="tooltip" data-tip={icon.name}>
                      <div className="text-2xl text-white" key={i}>
                        {icon.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
