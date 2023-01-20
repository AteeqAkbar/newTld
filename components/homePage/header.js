import React, { Fragment } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-gradient-to-l from-[#F8FBFE] to-[rgba(157,213,200,0.9)] w-full">
        <div className="ml-0 xs:ml-[5.44%] grid md:grid-cols-2">
          <div className="text-center xs:text-left">
            <div className=" ">
              <div className="xs:w-[88.52%] mt-[16.03%]">
                <p className="text-[40px] xs:text-[48px] sm:text-[64px] font-['Raleway'] text-[#1C2D56] leading-[75px] sm:leading-[60px] md:leading-[75px] font-bold sm:font-[700]">
                  Find and Book a Mentor for your 1:1 help today!
                </p>
              </div>

              <p className="font-['Raleway'] text-[20px] sm:text-[24px] mt-[20px] text-[#1C2D56] xs:w-[88%]">
                We have over 200 Mentors available, qualified in over 300
                subjects
              </p>

              <button className=" xs:mb-[50px] h-[39px] w-[40%] xs:w-[25.91%] md:w-[40%] lg:w-[25.91%] border-[#1C2D56] hover:bg-[#1C2D56] rounded-[8px] border-[2px] mt-6">
                <a className="hover:text-white">Find a Mentor</a>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative max-w-[124px] max-h-[124px] ml-auto mr-[5.5%] mt-[6.23%] border-[#FFB66A] border-[12px] rounded-[70px] ">
              <Image
                src="/img/mentor4.png"
                width={100}
                height={100}
                alt="Image glimpse"
              />
            </div>

            <div className=" max-w-[144px] max-h-{144px} ml-auto mr-[50.5%]  mt-[-13%] border-[#70C3F9] border-[12px] rounded-[70px]  ">
              <Image
                src="/img/mentor6.png"
                alt="Img Glimpse"
                width={120}
                height={120}
              />
            </div>

            <div className=" max-w-[174px] max-h-[174px] border-[#6BFFAB] border-[12px] rounded-[95px]  ml-auto mr-[25.5%]  mt-[3%] object-cover">
              <Image
                src="/img/mentor2.png"
                alt="Image"
                width={150}
                height={150}
              />
            </div>

            <div className="max-w-[124px] max-h-[124px] border-[#DC8CFF] border-[12px] rounded-[85px]  ml-auto mr-[70.5%]  mt-[-4%] object-cover">
              <Image src="/img/mentor3.png" alt="" width={100} height={100} />
            </div>

            <div className="max-w-[124px] max-h-[124px] border-[#ACB0B5] border-[12px] rounded-[85px]  ml-auto mr-[35.5%]  mt-[-3%] ">
              <Image src="/img/mentor7.png" alt="" width={100} height={100} />
            </div>

            <div className="max-w-[124px] max-h-[124px] border-[#FFE36A] border-[12px] rounded-[85px]  ml-auto mr-[5.5%]  md:mt-[-55%] lg:mt-[-30%] ">
              <Image src="/img/mentor5.png" alt="" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="min-h-[140.99px] relative w-full">
          <Image src="/img/Vector 1.png" alt="img" fill />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
