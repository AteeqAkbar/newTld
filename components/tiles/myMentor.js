import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import MyMentorsCard from "./myMentorsCard";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const MyMentor = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    // // navText: [
    // //   '<i class="fas fa-angle-left"></i>',
    // //   '<i class="fas fa-angle-right"></i>',
    // // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="my-[64px]">
        <div className="flex justify-between  mb-[30px] mx-[5%] xs:mx-[10%] lg:mx-[15%]">
          <h2 className="text-3xl   font-bold"> MyMentors</h2>
          <div className="flex gap-2 justify-between items-center ">
            <p className="text-[20px] text-[#909090] leading-[23px] ">
              Explore
            </p>
            <div className="bg-[url('/img/Arrow.png')] w-6 h-6 bg-no-repeat hover:bg-[url('/img/Group.svg')] bg-center hover:transition-all hover:translate-x-1 hover:duration-200"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-start  xs:justify-center mx-[5%] md:mx-[10%] lg:mx-[15%] md:gap-[4%] lg:gap-[2.5%]">
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
        </div>
        {/* <div>
          <OwlCarousel
            className="owl-theme"
            loop
            dots={false}
            animateIn={true}
            {...options}
          >
            <MyMentorsCard />
          </OwlCarousel>
        </div> */}
      </div>
    </>
  );
};

export default MyMentor;
