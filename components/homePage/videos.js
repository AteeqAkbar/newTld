import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card";
import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import ReactPlayer from "react-player";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Videos = () => {
  // const [Mentors, setMentors] = useState(false);
  // // const Mentors = getAllMentors();
  // useEffect(() => {
  //   async function name() {
  //     const users = await getUsers();
  //     console.log(users);
  //     setMentors(users);
  //   }
  //   name();
  // }, []);

  // if (!Mentors) {
  //   return <Spinner />;
  // }

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    // navText: [
    //   '<i class="fas fa-angle-left"></i>',
    //   '<i class="fas fa-angle-right"></i>',
    // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      768: {
        items: 2,
      },
      950: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  return (
    <Fragment>
      <div className="ml-[32px]">
        <div className="flex justify-between ml-3 mb-[32px] mr-[32px]">
          <h2 className="text-3xl font-bold">Past Sessions</h2>
          <div className="flex gap-2 justify-between items-center ">
            <p className="text-[20px] text-[#909090] leading-[23px] ">
              Explore
            </p>
            <div className="bg-[url('/img/Arrow.png')] w-6 h-6 bg-no-repeat hover:bg-[url('/img/Group.svg')] bg-center hover:transition-all hover:translate-x-1 hover:duration-200"></div>
            {/* <img
              src="/img/Arrow.png"
              alt="Arrow Image"
              className="object-cover "
            /> */}
          </div>
        </div>
        <OwlCarousel
          className="owl-theme  "
          loop
          // dots={true}
          animateIn={true}
          {...options}
        >
          <div className="mx-4">
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh"
              }
              pip={true}
              controls={true}
              playing={false}
            />
          </div>
          <>
            <ReactPlayer
              className=""
              url={
                "https://www.youtube.com/watch?v=Ulp1Kimblg0&ab_channel=CodeWithChris"
              }
              pip={true}
              controls={true}
              playing={false}
            />
          </>
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default Videos;
