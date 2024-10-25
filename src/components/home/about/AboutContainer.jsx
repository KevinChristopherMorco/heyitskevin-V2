import React from "react";
import skills from "../../../json/skills.json";

import MainHeading from "../../shared/heading/MainHeading";
import SkillCard from "./SkillCard";

const AboutContainer = () => {
  return (
    <section className="flex flex-col gap-10 justify-start">
      <MainHeading title={"Let's Work Together"} />
      <p className="font-light">
        From{" "}
        <span className="font-bold text-[var(--brand-color-violet)]">
          concept{" "}
        </span>
        to{" "}
        <span className="font-bold text-[var(--brand-color-violet)]">
          deployment
        </span>
      </p>
      <p className="font-light">
        I help awesome people build amazing websites that not only look great
        but also deliver exceptional user experiences. With a passion for
        blending creativity and technology, I thrive on transforming ideas into
        functional, responsive designs that engage users and drive results.
      </p>
      <p className="font-light">
        Let’s turn your vision into{" "}
        <span className="font-bold text-[var(--brand-color-violet)]">
          {" "}
          reality!
        </span>{" "}
      </p>
      <div id="skills" className="flex flex-col items-center gap-10">
        {skills.map((skill, index) => {
          return <SkillCard key={index} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default AboutContainer;
