import React from "react";

export default function Bulb() {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <img src="/bulb.png" alt="" className="w-[260px] h-[260px] object-contain" />
    </div>
  );
}
