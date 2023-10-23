import { Building2, Plus } from "lucide-react";
import React from "react";

const data = [
  {
    id: 1,
    college: "PES Modern College, Pune",
    degree: "Computer Engg.",
    cgpa: "8.5",
  },
  {
    id: 2,
    college: "PES Modern College, Pune",
    degree: "Computer Engg.",
    cgpa: "8.5",
  },
];
const EducationProfile = () => {
  return (
    <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
      <div className="w-[30%] justify-start text-start mt-4 pr-16">
        <h2 className="text-2xl font-semibold dark:text-white">Education</h2>
        <p className="text-slate-400 text-xs">Where did you Studied?</p>
      </div>
      <div className="flex flex-1 flex-col">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex bg-gray-50 flex-row my-4 mr-3 gap-4 rounded-md border border-gray-300 px-6 py-1 items-center dark:bg-gray-700 dark:border-gray-600"
          >
            <div>
              <Building2 size={35} className="dark:text-white text-gray" />
            </div>
            <div className="flex w-full flex-col text-left m-2">
              <div className="flex justify-between">
                <h3 className="dark:text-white">{item.college}</h3>
                <p className="text-xs text-gray-500 cursor-pointer">Edit</p>
              </div>
              <span className="text-[14px] text-blue-600">{item.degree}</span>
              <span className="text-slate-400 text-[14px]">{item.cgpa}</span>
            </div>
          </div>
        ))}
        <p className="text-start cursor-pointer flex items-center gap-1 text-xs text-blue-800">
          <Plus size={14} />
          Add your Education
        </p>
      </div>
    </div>
  );
};

export default EducationProfile;
