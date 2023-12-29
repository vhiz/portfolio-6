import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [load, setload] = useState(false);
  const emailref = useRef();
  const handleSubmit = async (e) => {
    try {
      setload(true);
      e.preventDefault();

      const result = await emailjs.sendForm(
        "service_x6nmbld",
        "template_k1st22t",
        emailref.current,
        "SjYsLTVwgujolV-mp"
      );

      setSucess(true);
      setError(false);
    } catch (error) {
      setError(true);
      setSucess(false);
    } finally {
      setload(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
          >
            <form
              className="flex flex-1 flex-col gap-6 "
              onSubmit={handleSubmit}
              ref={emailref}
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input transition-all duration-200"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="email"
                  className="input transition-all duration-200"
                  name="email"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="subject"
                className="input transition-all duration-200"
                name="subject"
                required
              />
              <textarea
                className="textarea"
                placeholder="message"
                name="message"
                required
              ></textarea>
              {sucess ? (
                <p>Thank you for reaching out hope to work with you soon😄💛</p>
              ) : error ? (
                <p>Something went wrong reload page</p>
              ) : (
                <button
                  type="submit"
                  className="btn rounded-full border border-white/10 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    {load ? "Loading..." : `Let's talk`}
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
