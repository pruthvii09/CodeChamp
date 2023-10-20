import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { useUserContext } from "../../hooks/useUserContext";
import Skeleton from "react-loading-skeleton";

function Overview() {
  const { user } = useUserContext();
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/users/userDetail/${user?.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setUserData(json?.userDetails?.userDetails[0]);
        console.log("userData", userData);
        console.log(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
    setLoading(false);
  }, [user?.id, userData]);
  return (
    <div className="my-32 flex flex-col content-start items-star mx-32 dark:bg-gray-900">
      <h1 className="text-3xl font-medium mx-20">What recruiters will see</h1>
      <div className="flex flex-col border border-gray-300 bg-gray-50  rounded-md items-start mx-20 mt-10">
        <div className="flex flex-col justify-start mx-5 pb-5 ">
          <div className="flex flex-row items-center gap-5 pt-5 ">
            <p className="font-bold text-2xl">{user?.name}</p>
            <p className="border text-xs text-emerald-500 rounded-md bg-slate-200 px-1">
              Active Today
            </p>
          </div>
          <span className="text-slate-400 text-sm">
            <Skeleton className="flex-1" count={5} /> • 0.5 Hours behind
          </span>
        </div>
        <div className="flex flex-col pb-5 items-start mx-5">
          <h4 className="text-slate-400">Looking for</h4>
          <p className="items-start text-justify leading-5 tracking-wide text-[15px]">
            {userData.desc}
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
            <div className="flex flex-row gap-4 flex-wrap text-xs">
              <h3 className="border rounded-md bg-slate-200 p-1 ">
                Javascript
              </h3>
              <h3 className="border rounded-md bg-slate-200 p-1">HTML</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">CSS</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">MongoDB</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">Node.js</h3>
              <h3 className="border rounded-md bg-slate-200 p-1">React</h3>
              <h3 className="border rounded-md bg-slate-200 p-1 ">
                MERN Stack - Javascript (ES5 & ES6), MongoDB, Express.Js, React,
                Node.Js
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
