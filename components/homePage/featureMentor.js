import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card";
import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import Spinner from "../spinner";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const FeatureMentor = () => {
  const [Mentors, setMentors] = useState(false);
  // const Mentors = getAllMentors();
  useEffect(() => {
    async function name() {
      const users = await getUsers(true);
      // console.log(users);
      setMentors(users);
    }
    name();
  }, []);

  if (!Mentors) {
    return <Spinner />;
  }

  // console.log(Mentors, "Mentorssssssssssssssssssssssssssssssssssss");

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
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
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  return (
    <Fragment>
      <div className=" xs:ml-[32px] mt-[32px]">
        <div className="flex justify-between ml-3 mr-[32px]">
          <h2 className="text-3xl font-bold">Featured Mentors</h2>
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
          dots={false}
          animateIn={true}
          {...options}
        >
          <Card mentors={Mentors} />
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default FeatureMentor;
