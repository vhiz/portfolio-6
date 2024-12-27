import { BsArrowRight } from "react-icons/bs";
import Seo from "../components/Seo";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_x6nmbld",
        "template_k1st22t",
        formRef.current,
        "SjYsLTVwgujolV-mp"
      );

      setSuccess(true);
      setError(false);
      formRef.current.reset();
    } catch (err) {
      console.log(err);
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex items-start md:items-center justify-center">
      <Seo
        title="Mgbeahurike Victor- Software Developer - Contact"
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
        url="https://portfolio-49f29.web.app/contact"
        image="https://ik.imagekit.io/pokwil20g/work"
        siteName="Mgbeahurike Victor"
      />
      <div className="flex flex-col w-full gap-4 max-w-[700px] animate-fade-down">
        <h2 className="md:text-6xl text-3xl text-center font-semibold">
          Let's <span className="text-accent">connect.</span>
        </h2>
        {success && (
          <div className="alert alert-success">Message sent successfully!</div>
        )}
        {error && (
          <div className="alert alert-error">
            Failed to send message. Please try again.
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col gap-4 w-full animate-fade-down animate-delay-500"
        >
          <div className="flex items-center flex-col w-full sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="input input-bordered w-full grow"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input input-bordered w-full grow"
            />
          </div>
          <input
            type="text"
            name="subject"
            className="input input-bordered w-full"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            className="textarea textarea-bordered h-20 xl:h-[14rem]"
            placeholder="Message...."
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="btn w-fit rounded-full px-[5rem] btn-outline group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              {loading ? "Sending..." : "Let's Talk"}
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </form>
      </div>
    </div>
  );
}
