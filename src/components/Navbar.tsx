import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Image from "./Image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const socials = [
    {
      link: "https://github.com/vhiz",
      icon: <FaGithub />,
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/mgbeahurike-victor-40981723b/",
      icon: <FaLinkedin className="text-blue-600" />,
      name: "Linkedin",
    },
    {
      link: "https://x.com/The_api_guy33",
      icon: <FaXTwitter />,
      name: "X",
    },
    {
      link: "https://wa.link/7qzld5",
      icon: <FaWhatsapp className="text-green-600" />,
      name: "Whatsapp",
    },
  ];
  return (
    <div className="navbar px-0 xl:relative z-50">
      <div className="flex-1">
        <Link to={"/"}>
          <Image
            lazy
            src="logo"
            width="40"
            height="40"
            className="scale-50 md:scale-100"
          />
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex items-center">
          {socials.map((social) => (
            <div
              key={social.name}
              className="tooltip tooltip-left"
              data-tip={social.name}
            >
              <Link
                to={social.link}
                target="blank"
                className="btn-sm btn btn-ghost"
              >
                {social.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
