import React from "react";
import {
  RiFacebookBoxLine,
  RiFileCloudLine,
  RiGithubFill,
  RiGithubLine,
  RiLinkedinBoxLine,
} from "@remixicon/react";

const HeroContainer = () => {
  return (
    <section className="h-screen flex flex-col justify-start items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="bg-black w-20 h-20 rounded-full"></div>
        <p className="text-4xl font-light text-center leading-[3rem]">
          Hi, my name is <span className="font-black">Kevin</span>
        </p>
      </div>
      <div className="flex w-full justify-center items-center gap-5">
        <div className="relative">
          <div className="pixel-corners absolute w-full top-3 -left-2 w-full py-4 items-center px-6 bg-[var(--brand-color-violet)] rounded-full"></div>
          <button className="pixel-corners relative z-[10] py-2 items-center px-6 bg-[var(--brand-color-blue)]  font-medium flex gap-1 rounded-full">
            <RiFileCloudLine className="w-4 h-4" />
            <p>Projects</p>
          </button>
        </div>
        <button className="py-2 text-[var(--brand-color-violet)] items-center px-6 border border-[var(--brand-color-violet)] rounded-full font-bold flex gap-1">
          <RiGithubFill className="w-5 h-5" />
          <p>Github</p>
        </button>
      </div>
      <ul className="flex gap-6">
        <li>
          <a href="">
            <RiLinkedinBoxLine className="w-8 h-8" />
          </a>
        </li>
        <li>
          <a href="">
            <RiGithubLine className="w-8 h-8" />
          </a>
        </li>
        <li>
          <a href="">
            <RiFacebookBoxLine className="w-8 h-8" />
          </a>
        </li>
      </ul>
      <p className="text-sm font-light">Just keep scrolling {":)"}</p>
      <div className="h-full border-l-[0.1px] border-gray-400"></div>
    </section>
  );
};

export default HeroContainer;
