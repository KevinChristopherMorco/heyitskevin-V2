import React from "react";

import stacks from "../../../json/stacks.json";
import MainHeading from "../../shared/heading/MainHeading";

const TechnologyContainer = () => {
  return (
    <section className="flex flex-col gap-10 items-center">
      <MainHeading title={"Technology Stacks"} />
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {stacks.map((stack, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center border border-gray-500 p-3 rounded-xl"
            >
              <div className="flex justify-center items-center bg-[var(--bg-color-light)] p-3 rounded-md">
                <img src={stack.logo} alt="" className="w-[70px] h-[70px]" />
              </div>
              <p className="text-sm font-bold">{stack.technology}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologyContainer;
