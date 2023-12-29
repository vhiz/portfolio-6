import React from "react";
import { Link } from "react-router-dom";

export default function Social() {
  const data = [
    {
      path: "https://github.com/vhiz",
      img: "/github.png",
    },
    {
      path: "https://www.linkedin.com/in/mgbeahurike-victor-40981723b",
      img: "/linkedin.png",
    },
    {
      path: "https://twitter.com/The_api_guy33?t=xAKsZTpLidITkXlAGtTBWA&s=09",
      img: "/twitter.png",
    },
    {
      path: "https://wa.me/09056394367?text=Hello%20welcome%2C%20how%20may%20I%20be%20of%20assistance",
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
