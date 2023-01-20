import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full md:h-[254px] md:flex flex-col bg-[#1C2D56]">
          <div className="w-full flex-col flex md:flex-row ">
            <div className="md:w-[24.44%] w-[50%] mx-auto md:flex md:items-center">
              <div className="w-[63.63%] py-5 bg-[#E6E5E5] my-[18px] md:my-[72px] mx-auto flex items-center justify-center">
                <Link
                  href="/"
                  className="text-[16px] leading-[18px] text-[#1C2D56] m-auto cursor-pointer"
                >
                  Logo
                </Link>
              </div>
            </div>

            <div className=" sm:flex gap-[10px] items-center mx-auto w-[80%] md:w-[50%] justify-between">
              <div className="text-[20px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-medium text-center text-[#FFFFFF] cursor-pointer      ">
                Find a Mentor
              </div>
              <div className="text-[20px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-medium text-center text-[#FFFFFF] cursor-pointer     ">
                About Us
              </div>
              <div className="text-[20px] sm:text-[20px] md:px-1 md:text-[18px] lg:text-[20px] font-medium text-center text-[#FFFFFF] cursor-pointer      ">
                Pricing
              </div>
              <div className="text-[20px] sm:text-[20px] md:text-[18px] lg:text-[20px] font-medium text-center text-[#FFFFFF] cursor-pointer     ">
                Become a Member
              </div>
            </div>

            <div className="sm:w-[30%] md:w-[19.44%] mx-auto md:mr-[1rem] lg:ml-auto lg:mr-[2%]">
              <div className="w-[70%] md:w-[54.88%] lg:w-[60%] gap-[10px] md:gap-[5px] flex md:justify-between lg:ml-auto lg:mr-auto my-[15px] md:my-[89px]">
                <Image
                  src="/img/LinKedIn (2).png"
                  className="cursor-pointer"
                  width={32}
                  height={32}
                  alt="img"
                />
                <Image
                  src="/img/Facebook (1).png"
                  className="cursor-pointer"
                  width={32}
                  height={32}
                  alt="img"
                />
                <Image
                  src="/img/Instagram (1).png"
                  className="cursor-pointer"
                  width={32}
                  height={32}
                  alt="img"
                />
                <Image
                  src="/img/Twitter (3).png"
                  className="cursor-pointer"
                  width={32}
                  height={32}
                  alt="img"
                />
                {/* <img src="/img/LinKedIn (2).png" className="cursor-pointer" />
                <img src="/img/Facebook (1).png" className="cursor-pointer" />
                <img src="/img/Instagram (1).png" className="cursor-pointer" />
                <img src="/img/Twitter (3).png" className="cursor-pointer" /> */}
              </div>
            </div>
          </div>
          <div className="w-full h-[18.11%] ">
            <div className="w-[91.11%] border-t-[1px] border-[white] mx-auto flex justify-between pt-2">
              <p className="text-[12px] leading-[14px] font-light text-white">
                @2022 TheLearningDao. All Rights Reserved
              </p>
              <div className="flex ">
                <p className="text-[12px] leading-[14px] font-medium text-white mr-4">
                  Terms & Conditions
                </p>
                <p className="text-[12px] leading-[14px] font-medium text-white">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
