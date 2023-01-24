import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoCard = () => {
  return (
    <div className="mx-[32px]">
      <div className="flex justify-between ml-3 mb-[32px] ">
        <h2 className="text-3xl font-bold">Past Sessions</h2>
        <div className="flex gap-2 justify-between items-center ">
          <p className="text-[20px] text-[#909090] leading-[23px] ">Explore</p>
          <div className="bg-[url('/img/Arrow.png')] w-6 h-6 bg-no-repeat hover:bg-[url('/img/Group.svg')] bg-center hover:transition-all hover:translate-x-1 hover:duration-200"></div>
        </div>
      </div>

      <div className=" w-full">
        <div className="flex flex-wrap justify-between ">
          <div className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]">
            <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px] overflow-hidden ">
              <div className="relative mx-auto w-[100%] h-[200px] ">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh"
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
                    Session Title
                  </p>
                </div>

                <div className="flex  gap-2 mb-4 h-[32px]">
                  <Image
                    src="/img/Image (2).png"
                    alt=""
                    height={32}
                    width={32}
                    className="rounded-[50px] object-cover"
                  />

                  <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                    Ali Raza
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]">
            <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px] overflow-hidden ">
              <div className="relative mx-auto overflow-hi w-[100%] h-[200px] ">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh"
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
                    Session Title
                  </p>
                </div>

                <div className="flex  gap-2 mb-4 h-[32px]">
                  <Image
                    src="/img/Image (2).png"
                    alt=""
                    height={32}
                    width={32}
                    className="rounded-[50px] object-cover"
                  />

                  <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                    Ali Raza
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]">
            <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px] overflow-hidden ">
              <div className="relative mx-auto overflow-hi w-[100%] h-[200px] ">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh"
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
                    Session Title
                  </p>
                </div>

                <div className="flex  gap-2 mb-4 h-[32px]">
                  <Image
                    src="/img/Image (2).png"
                    alt=""
                    height={32}
                    width={32}
                    className="rounded-[50px] object-cover"
                  />

                  <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                    Ali Raza
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] xs:w-[80%] sm:w-[45%]  lg:w-[30.2%] xl:w-[23.18%]">
            <div className=" flex flex-col gap-4 mb-8  bg-[#F4F4F4] rounded-[12px] overflow-hidden ">
              <div className="relative mx-auto overflow-hi w-[100%] h-[200px] ">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh"
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
                    Session Title
                  </p>
                </div>

                <div className="flex  gap-2 mb-4 h-[32px]">
                  <Image
                    src="/img/Image (2).png"
                    alt=""
                    height={32}
                    width={32}
                    className="rounded-[50px] object-cover"
                  />

                  <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
                    Ali Raza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
