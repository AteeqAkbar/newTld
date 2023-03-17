import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoCardItem = () => {
  return (
    <Fragment>
      <div className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]">
        <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px] overflow-hidden ">
          <div className="relative mx-auto w-[100%] h-[200px] ">
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=joFQtKOaIiQ&ab_channel=TheLearningDAO"
              }
              width="100%"
              height="100%"
              pip={true}
              controls={true}
              playing={false}
              className="absolute top-0 left-0 "
            />
          </div>
          <div className="flex flex-col  mx-3">
            <div className=" mb-4 max-h-[30px] ">
              <p className="text-[20px] hover:text-clip overflow-hidden ... truncate xs:text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
                Introduction to Azure DevOps - Part 1
              </p>
            </div>

            <div className="flex  gap-2 mb-4 h-[32px]">
              <Image
                src="/img/mentor2.png"
                alt=""
                height={32}
                width={32}
                className="rounded-[50px] object-cover"
              />

              <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                Irfan Bashir
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoCardItem;
