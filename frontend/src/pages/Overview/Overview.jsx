import React from "react";
import { GraduationCap } from "lucide-react";

function Overview() {
  return (
    <div className="my-32 flex flex-col content-start items-star mx-32">
      <h1 className="text-3xl font-medium mx-20">What recruiters will see</h1>
      <div className="flex flex-col border border-gray-300 bg-gray-50  rounded-md items-start mx-20 mt-10">
        <div className="flex flex-col justify-start mx-5 pb-5 ">
          <div className="flex flex-row items-center gap-5 pt-5 ">
            <p className="font-bold text-2xl">Pruthviraj Auti</p>
            <p className="border text-xs text-emerald-500 rounded-md bg-slate-200 px-1">
              Active Today
            </p>
          </div>
          <span className="text-slate-400 text-sm">
            India • 0.5 Hours behind
          </span>
        </div>
        <div className="flex flex-col pb-5 items-start mx-5">
          <h4 className="text-slate-400">Looking for</h4>
          <p className="items-start text-justify leading-5 tracking-wide text-[15px]">
            I am an enthusiastic Frontend Developer who is interested in
            cutting-edge web technologies such as ReactJS, HTML, CSS, and
            JavaScript. I am now in my second year of engineering at SPPU
            University, where I am pursuing a degree in Computer Science. I am
            an enthusiastic Frontend Developer who is interested in cutting-edge
            web technologies such as ReactJS, HTML, CSS, and JavaScript. I am
            now in my second year of engineering at SPPU University, where I am
            pursuing a degree in Computer Science.
          </p>
        </div>
        <div className="flex flex-col pb-5 mx-5 items-start">
          <h4 className="text-slate-400 pb-3">Experience</h4>
          <div className=" flex flex-row gap-5 items-center">
            <div className="flex flex-row items-center justify-center border border-gray-400 bg-gray-100 rounded-md h-12 w-12">
              <GraduationCap />
            </div>
            <div className="flex flex-col justify-start">
              <span className="items-start font-bold text-left">Student</span>
              <span className="text-slate-500 text-left">
                Modern College of Engineering, Pune
              </span>
              <span className="text-slate-500 text-left text-xs">
                Dec 2022 to Present · 11 months
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-5 mx-5 items-start">
          <span className="text-slate-400 pb-3">Education</span>
          <div>
            <p className="font-semibold	text-[16px]">
              BEng, Computer Science and Engineering
            </p>
            <h4 className="text-slate-4 00 text-left">
              Pes Modern College of Engineering • 2021
            </h4>
          </div>
        </div>
        <div className="flex flex-col pb-5 mx-5 items-start">
          <h4 className="text-slate-400 pb-3">Skills</h4>
          <div className="flex flex-col  ">
            <div className="flex flex-row gap-4">
              <h3 className="border rounded-md bg-slate-200 p-1 ">
                Javascript
              </h3>
              <h3 className="border rounded-md bg-slate-200 p-1">HTML</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">CSS</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">MongoDB</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">Node.js</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">React</h3>
            </div>
            <h3 className="border rounded-md bg-slate-200 mt-2 p-1 ">
              MERN Stack - Javascript (ES5 & ES6), MongoDB, Express.Js, React,
              Node.Js
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
