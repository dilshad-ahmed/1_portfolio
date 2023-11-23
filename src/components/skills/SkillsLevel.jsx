import React from "react";

const SkillsLevel = ({ skillsName, percentage }) => {
  return (
    <>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-sm text-right">{percentage}</p>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <div
            style={{ width: `${percentage}` }}
            className={`h-2 bg-primary rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SkillsLevel;
