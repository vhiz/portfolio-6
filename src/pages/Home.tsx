import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="">
      <Seo
        title="Mgbeahurike Victor- Software Developer"
        description="I'm a Software developer specializing in building exceptional digital experiences."
        url="https://portfolio-49f29.web.app"
        image="https://ik.imagekit.io/pokwil20g/avatar"
        siteName="Mgbeahurike Victor"
      />
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full items-center xl:items-start container mx-auto z-20">
        <h1 className="text-[35px] animate-fade-right leading-tight sm:text-[60px] md:leading-[1.3] mb-8 font-semibold">
          Make your <br /> Dreams{" "}
          <span className="text-accent">Digital Today </span>
        </h1>
        <div className="flex scale-75 justify-center overflow-hidden sm:hidden">
          <ProjectBtn />
        </div>
        <div className="hidden sm:flex overflow-hidden">
          <ProjectBtn />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden w-full h-full mix-blend-color-dodge sm:mix-blend-normal -z-10 xl:z-auto">
        <div className="bg-[url(https://ik.imagekit.io/pokwil20g/bg-explosion)] bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div className="animate-fade-up animate-delay-500 absolute sm:hidden xl:block -bottom-24 right-0">
          <Image
            src="avatar"
            className="max-w-[45rem] max-h-[40rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectBtn() {
  return (
    <Link to={"/work"} className="relative z-10 animate-fade animate-delay-700">
      <div className="relative animate-spin animate-infinite animate-duration-[5s] w-[185px] h-[185px] flex justify-center items-center bg-[url(https://ik.imagekit.io/pokwil20g/circle-star)] bg-cover bg-center bg-no-repeat group">
        <Image lazy src="rounded-text" />
      </div>
      <button className="btn btn-ghost rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 text-base-content  hover:rotate-45">
        <MdOutlineArrowOutward className="text-2xl" />
      </button>
    </Link>
  );
}
