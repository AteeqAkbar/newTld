import React from "react";
import Image from "next/image";

const BadgesCircle = () => {
  return (
    <>
      <div className="2xl:w-[43.65%] xl:w-[91.7%] lg:w-[90.7%] md:w-[68.3%] w-[39.5%] h-auto rounded-[100%] bg-[#E1EAFF] flex ">
        <Image
          src="/img/Subtract.png"
          width={36}
          height={36}
          alt="img"
          className="my-[22.5px] mx-auto object-cover"
        />
      </div>
    </>
  );
};

export default BadgesCircle;
