import React from "react";
import Spinner from "../spinner";
import Image from "next/image";
const LearningCard = ({ data }) => {
  if (!data) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-[80%] mb-[20px] mx-auto xs:w-[100%] h-auto rounded-[12px] flex group hover:bg-[#F4F4F4]">
        <div className="flex flex-col mx-auto xs:flex-row w-[100%] gap-4 xs:ml-[12px] my-[12px]">
          <div className="relative mx-auto max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] xs:min-w-[96px] xs:min-h-[96px]  my-auto ">
            <Image
              src={data.image}
              alt="img"
              fill
              className=" rounded-[12px]"
            />
            {/* <img
              src={data.image}
              className="w-full min-h-[96px] object-fill rounded-[12px]"
            /> */}
          </div>

          <div className="w-[76.93%] flex flex-col  mx-auto gap-4 my-auto">
            <div className="flex flex-col gap-1">
              <div className=" h-[14px]">
                <p className="text-[12px] leading-[14px] tex font-medium overflow-hidden ... text-[#8B8B8B] group-hover:text-green-800">
                  {new Date(data.startTime.seconds * 1000).toLocaleDateString()}
                </p>
              </div>
              <div className=" max-h-[30px]  w-full ">
                <p className="xl:text-[24px] w-[91.1%]  hover:text-clip overflow-hidden ... truncate lg:text-[20px] md:text-[15px] leading-[28px] font-medium text-[#000000] group-hover:text-[#1C2D56]">
                  {data.title}
                </p>
              </div>
            </div>

            <div className="w-[65%] h-auto flex gap-2">
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src={data.instructor.summry.image}
                  alt="img"
                  fill
                  className="object-cover rounded-[20px]"
                />
                {/* <img
                  src={data.instructor.summry.image}
                  className="w-full  object-cover rounded-[20px] h-6"
                /> */}
              </div>

              <p className="sm:text-[16px] md:text-[16px] leading-[19px] overflow-hidden ... font-medium text-[#8B8B8B] group-hover:text-[#1C2D56]">
                {data.instructor.summry.displayName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LearningCard;
