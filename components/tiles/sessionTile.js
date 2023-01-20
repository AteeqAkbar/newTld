import React from "react";

const SessionTile = (props) => {
  return (
    <>
      <div className="bg-[white] flex justify-between py-2 px-4 rounded-lg">
        <p className="text-[#1C2D56] font-semibold">{props.Mentorship}</p>
        <p className="text-gray-900 font-semibold">
          {props.dollar} <span>{props.month}</span>
        </p>
      </div>
    </>
  );
};
export default SessionTile;
