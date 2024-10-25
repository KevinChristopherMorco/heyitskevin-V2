import React from "react";
import { RiCodeLine, RiGamepadLine } from "@remixicon/react";

import projects from "../../../json/projects.json";
import getLogo from "../../../helpers/getLogo";

import MainHeading from "../../shared/heading/MainHeading";

const ProjectContainer = () => {
  return (
    <section className="flex flex-col gap-10">
      <MainHeading title={"My Projects"} />

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 bg-[var(--bg-color)]"
          >
            <img
              src={project.image}
              className="w-full h-[15rem] rounded-lg"
              alt=""
            />
            <p className="font-bold text-3xl">{project.title}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack) => {
                return (
                  <div className="w-fit px-2 py-1 flex gap-1 items-center border border-gray-400 rounded-lg">
                    {getLogo(stack)}
                  </div>
                );
              })}
            </div>
            <p>{project.information}</p>
            <div className="flex w-full justify-center gap-6">
              <div className="relative">
                <div className="w-full absolute top-2 -left-2 px-6 py-5 rounded-md bg-[var(--brand-color-violet)]"></div>
                <button className="relative z-[10] flex items-center gap-2 px-6 py-2 rounded-md bg-[var(--brand-color-blue)] font-bold text-lg">
                  <RiGamepadLine className="w-6 h-6" />
                  Preview
                </button>
              </div>
              <button className=" flex items-center gap-2 border-2 px-6 py-2 rounded-md border-[var(--brand-color-violet)] text-[var(--brand-color-violet)] font-bold text-lg">
                <RiCodeLine className="w-6 h-6" />
                Source
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
