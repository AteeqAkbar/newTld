import React from "react";
import DateBlock from "../../components/myShedule/dateComp";
import SchduleDetailBlock from "../../components/myShedule/sheduleDetailComp";
import OtherScheduleBlock from "../../components/myShedule/otherscheduleComp";
const Schdule = () => {
  return (
    <>
      <DateBlock/>
      <SchduleDetailBlock/>
      <OtherScheduleBlock/>
    </>
  )
};

export default Schdule;
