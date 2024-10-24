import { RiChat1Fill, RiChat1Line, RiMenuFill } from "@remixicon/react";
import React from "react";

const Header = () => {
  return (
    <nav className="p-6 flex justify-between items-center">
      <div className="cursor-pointer">
        <p className="font-black text-xl">{"<Keviiin />"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 lg:gap-4 cursor-pointer group">
          <div className="flex relative">
            <RiChat1Fill className="absolute -left-2 w-5 h-5 text-[var(--brand-color-blue)] animate-iconFadeDown" />
            <RiChat1Line className="w-5 h-5 z-[10]" />
          </div>
          <p className="font-bold tracking-[.2em] group-hover:scale-110 transition-all uppercase">
            Hire Me
          </p>
        </div>
        <RiMenuFill className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default Header;
