import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Followbtn from "../tiles/followbtn";
import { BsCheckLg } from "react-icons/bs";

const Students = ({ student, onFollowHenddler }) => {
  console.log(student.uid, "StudentData");
  return (
    <Fragment>
      <div>
        <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
          <Link href={`/auth/${student.uid}`}>
            <div className="flex  h-[32px]">
              <Image
                src={student.summry.image}
                alt="img"
                width={32}
                height={32}
                className="rounded-[50px] object-cover"
              />
              <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                {student.summry.displayName}
              </h1>
            </div>
          </Link>
          <button
            onClick={() => {
              onFollowHenddler(student.uid, student.summry.displayName);
            }}
            className="w-[74px] h-[3.39vh] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl"
          >
            Follows
          </button>
          {/* <Followbtn
            onClick={() => {
              console.log("sasas");
              onFollowHenddler(student.uid);
            }}
            className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl"
          >
            Follow
          </Followbtn> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Students;
