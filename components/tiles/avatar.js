import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <>
      <div className="visible md:invisible relative h-[100px] w-[100px] border-[10px] border-white rounded-full top-[290px]">
        <Image
          src="/img/Image (13).png"
          alt="img"
          fill
          className="rounded-full"
        />
      </div>
    </>
  );
};
export default Avatar;
