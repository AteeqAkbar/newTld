import React from "react";

const AboutBlock=({data})=>{
    return (
        <>
        <div className="mt-[65px]">
            <h1 className="text-[24px] font-bold leading-[28px] font-['Relaway'] text-[#1C2D56] mb-[16px]">
                About Me
            </h1>
            <p className="leading-[22px] font-['Relaway']">
            {data?data:"Please Update Profile"}
            
            </p>
        </div>

        </>
    )
}
export default AboutBlock;