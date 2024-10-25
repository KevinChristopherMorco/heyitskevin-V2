import React from "react";

const MainHeading = ({ title, subtext, hasSubtext }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-black">{title}</h1>
      {hasSubtext && <p className="font-light text-base">{subtext}</p>}
    </div>
  );
};

export default MainHeading;
