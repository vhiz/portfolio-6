import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ProjectBtn() {
  return (
    <div className="mx-auto xl:mx-0">
      <Link to={"/work"} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <img
          src="/rounded-text.png"
          alt=""
          className="w-[141px] h-[148px] animate-spin-slow max-h-[148px] max-w-[141px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
}
