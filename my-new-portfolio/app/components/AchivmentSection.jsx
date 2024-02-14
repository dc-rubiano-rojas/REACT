import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Users",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "5+",
  },
];

const AchivmentSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div
        className="border-[#33353F] border 
      rounded-md py-8 px-17 flex flex-row items-center justify-between"
      >
        {achievementsList.map((achievement, index) => {
          return (
            <div key={achievement.metric}>
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchivmentSection;
