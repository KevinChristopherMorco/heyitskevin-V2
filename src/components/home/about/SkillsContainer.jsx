import React from "react";
import { RiCodeBoxFill, RiCodeSSlashFill } from "@remixicon/react";

import skills from "../../../json/skills.json";

import MainHeading from "../../shared/MainHeading";
import SkillCard from "./SkillCard";

const SkillsContainer = () => {
  return (
    <div id="skills" className="flex flex-col items-center gap-10">
      <MainHeading title={"Skills"} />
      {skills.map((skill, index) => {
        return <SkillCard key={index} skill={skill} />;
      })}
    </div>
  );
};

export default SkillsContainer;
