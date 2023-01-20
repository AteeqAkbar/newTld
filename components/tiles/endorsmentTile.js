import React from "react";
import Image from "next/image";

const Endorsment = () => {
  return (
    <>
      <div className="flex gap-2 min-w-[23.15%]">
        <p className="text-[24px] leading-[28px] font-['Raleway']">
          Books4us.com
        </p>
        <div>
          <Image src="/img/2group.png" alt="img" width={23.33} height={23.33} />
        </div>
      </div>
    </>
  );
};
export default Endorsment;
