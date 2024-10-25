import React from "react";

import getLogo from ".././../../helpers/getLogo";

const SkillCard = ({ skill }) => {
  const icon = getLogo(skill.icon);
  return (
    <div className="w-full flex flex-col gap-10 bg-[var(--bg-color-light)] border border-gray-400 p-4 rounded-lg text-[var(--brand-color-violet)]">
      {icon}
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-[var(--text-color)]">
          {skill.skill}
        </p>
        <p className="text-gray-500">{skill.overview}</p>
      </div>
      {skill.hasWork && (
        <button className="w-fit px-4 py-2 rounded-lg border-2 border-[var(--brand-color)] font-bold">
          See my work
        </button>
      )}
    </div>
  );
};

export default SkillCard;
