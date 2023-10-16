import { Building2, Plus } from "lucide-react";
import React from "react";
const data = [
  {
    id: 1,
    position: "Student",
    company: "PES Modern College, Pune",
    time: "Dec 22 to Present",
  },
  {
    id: 2,
    position: "Student",
    company: "PES Modern College, Pune",
    time: "Dec 22 to Present",
  },
];
const WorkExpProfile = () => {
  return (
    <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
      <div className="w-[30%] justify-start text-start mt-4 pr-16">
        <h2 className="text-2xl font-semibold">Your work experience</h2>
        <p className="text-slate-400 text-xs">
          What other positions have you held?
        </p>
      </div>
      <div className="flex flex-1 flex-col">
        {data.map((item) => (
          <div className="flex bg-gray-50 flex-row my-4 mr-3 gap-4 rounded-md border border-gray-300 px-6 py-1 items-center">
            <div>
              <Building2 size={35} color="gray" />
            </div>
            <div className="flex w-full flex-col text-left m-2">
              <div className="flex justify-between">
                <h3 className="font-semibold">{item.position}</h3>
                <p className="text-xs text-gray-500 cursor-pointer">Edit</p>
              </div>
              <span className="text-[14px] text-blue-600">{item.company}</span>
              <span className="text-slate-400 text-xs">{item.time}</span>
            </div>
          </div>
        ))}
        <p className="text-start cursor-pointer flex items-center gap-1 text-xs text-blue-800">
          <Plus size={14} />
          Add your work Experience
        </p>
      </div>
    </div>
  );
};

export default WorkExpProfile;
