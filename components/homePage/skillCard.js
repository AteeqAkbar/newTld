import InterestSkillsCard from "../tiles/interestSkillsCard";

const SkillCard = ({ onClickSkills, skills }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex pt-[32px]">
          <p className="m-auto text-[32px] font-semibold leading-[38px] font-[Raleway]">
            In-Demand Skills
          </p>
        </div>
        <div className=" mx-[11%] my-[32px]">
          <div className="flex flex-row flex-wrap justify-between">
            {skills.map((element) => {
              return (
                <div key={element.name}>
                  <InterestSkillsCard skill={element} click={onClickSkills} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
