import React from "react";
import { Link } from "react-router-dom";

export default function Social() {
  const data = [
    {
      path: "",
      img: "/github.png",
    },
    {
      path: "",
      img: "/linkedin.png",
    },
    {
      path: "",
      img: "/twitter.png",
    },
    {
      path: "",
      img: "/whatsapp.png",
    },
  ];
  return (
    <div className="flex gap-5 items-center">
      {data.map((item, i) => (
        <Link key={i} to={item.path} className="" target="blank">
          <img src={item.img} alt="" className="w-[20px]" />
        </Link>
      ))}
    </div>
  );
}
