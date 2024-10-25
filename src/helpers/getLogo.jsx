import React from "react";
import {
  RiCodeSSlashFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiLayoutGridFill,
  RiMacbookFill,
  RiReactjsFill,
} from "@remixicon/react";

const getLogo = (logo) => {
  switch (logo) {
    case "react":
      return (
        <>
          <RiReactjsFill className="w-4 h-4 text-[var(--react-color)]" />
          <p className="text-sm ">React</p>
        </>
      );
    case "javascript":
      return (
        <>
          <RiJavascriptFill className="w-4 h-4 text-[var(--javascript-color)]" />
          <p className="text-sm ">Javascript</p>
        </>
      );
    case "css":
      return (
        <>
          <RiCss3Fill className="w-4 h-4 text-[var(--css-color)]" />
          <p className="text-sm ">CSS</p>
        </>
      );
    case "html":
      return (
        <>
          <RiHtml5Fill className="w-4 h-4 text-[var(--html-color)]" />
          <p className="text-sm ">HTML</p>
        </>
      );

    case "code":
      return (
        <>
          <RiCodeSSlashFill className="w-14 h-14 text-[var(--brand-color)]" />
        </>
      );

    case "grid":
      return (
        <>
          <RiLayoutGridFill className="w-14 h-14 text-[var(--brand-color)]" />
        </>
      );

    case "computer":
      return (
        <>
          <RiMacbookFill className="w-14 h-14 text-[var(--brand-color)]" />
        </>
      );

    default:
      break;
  }
};

export default getLogo;
