import React from "react";
import {
  RiCopyrightFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMessengerFill,
} from "@remixicon/react";

import getCurrentYear from "../../helpers/getCurrentYear";

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="p-6 flex flex-col gap-4 border-t border-gray-500">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Get in Touch</p>
        <ul className="flex gap-3">
          <li>
            <RiLinkedinBoxFill className="w-8 h-8" />
          </li>
          <li>
            <RiGithubFill className="w-8 h-8" />
          </li>
          <li>
            <RiMessengerFill className="w-8 h-8" />
          </li>
        </ul>
      </div>
      <div className="text-sm flex flex-col gap-1">
        <p className="flex gap-1 text-gray-400">
          By:
          <span className="font-medium">Kevin Christopher Morco</span>
        </p>
        <div className="  flex gap-1 items-center text-gray-400">
          <p>Copyright</p>
          <p>
            <RiCopyrightFill className="w-4 h-4" />
          </p>
          <p>{currentYear}.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
