import Seo from "../components/Seo";
import WorkSlider from "../components/WorkSlider";

export default function Work() {
  return (
    <div className="container mx-auto">
      <Seo
        title="Mgbeahurike Victor- Software Developer - Projects"
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
        url="https://portfolio-49f29.web.app/work"
        image="https://ik.imagekit.io/pokwil20g/about"
        siteName="Mgbeahurike Victor"
      />
      <div className="flex flex-col xl:flex-row gap-x-8 overflow-hidden">
        <div className="text-center flex xl:w-[30vw] flex-col gap-5 lg:text-left mb-4 xl:mb-0 animate-fade-right">
          <h2 className="text-3xl font-semibold md:text-6xl xl:mt-12">
            My Works<span className="text-accent">.</span>
          </h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            {`These are the projects i've worked on `}
          </p>
        </div>
        <div className="w-full xl:max-w-[65%] animate-fade-down animate-delay-500">
          <WorkSlider />
        </div>
      </div>
    </div>
  );
}
