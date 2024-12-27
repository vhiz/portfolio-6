import Image from "../components/Image";
import Seo from "../components/Seo";
import ServiceSlider from "../components/ServiceSlider";

export default function Services() {
  return (
    <div className="overflow-hidden">
      <Seo
        title="Mgbeahurike Victor- Software Developer - Services"
        description="
My Services.
These are a list of services i offer

Hosting
Your sites will be hosted on working with me

RESPONSIVE WEB DESIGN
I offer clean and interractable responsive websites

Development
I use diffrent technologies to ensure clean and dynamic web apps

LANDING PAGES
I create simple and easy to use landing page for your business

SEO
Be able to find your site anywhere in the world

Content Writing
Easy to understand documentation when using my services

"
        url="https://portfolio-49f29.web.app/services"
        image="https://ik.imagekit.io/pokwil20g/about"
        siteName="Mgbeahurike Victor"
      />
      <div className="mix-blend-color-dodge w-60 animate-pulse animate-infinite xl:w-72 absolute bottom-0 right-0">
        <Image lazy src="circles" />
      </div>
      <div className="mix-blend-color-dodge w-52 animate-pulse animate-infinite xl:w-60 absolute bottom-6 -left-32 rotate-12">
        <Image lazy src="bulb" className="object-cover" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 animate-fade-down">
            <h2 className="text-4xl leading-tight md:text-6xl md:leading-[1.3] mb-4 font-semibold xl:mt-8">
              My Services<span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 uppercase">
              These are a list of services i offer
            </p>
          </div>
          <div
            className="w-full xl:max-w-[65%] animate-fade-left animate-delay-500
          "
          >
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
