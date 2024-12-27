import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
export default function Footer() {
  const navData = [
    { name: "Home", path: "/", icon: <HiHome className="text-3xl xl:text-xl"/> },
    { name: "About", path: "/about", icon: <HiUser className="text-3xl xl:text-xl"/> },
    { name: "Services", path: "/services", icon: <HiRectangleGroup className="text-3xl xl:text-xl"/> },
    { name: "Work", path: "/work", icon: <HiViewColumns className="text-3xl xl:text-xl"/> },
    {
      name: "Contact",
      path: "/contact",
      icon: <HiEnvelope className="text-3xl xl:text-xl"/>,
      
    },
  ];
  return (
    <div className="flex flex-col items-center xl:justify-center gap-y-4 fixed left-0 xl:left-auto h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((route) => (
          <NavLink to={route.path} key={route.name}>
            {({ isActive }) => {
                return(
              <div
                className="tooltip tooltip-top lg:tooltip-left"
                data-tip={route.name}
              >
                <button
                  className={`btn btn-ghost btn-sm ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {route.icon}
                </button>
              </div>
            )}}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
