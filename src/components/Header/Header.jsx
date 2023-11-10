import React from "react";
import { Link } from "react-router-dom";
import Social from "../socials/Social";

export default function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link to={"/"}>
            <img src="/logo.png" alt="" className="w-[48px] h-[48px]" />
          </Link>
          <Social />
        </div>
      </div>
    </header>
  );
}
