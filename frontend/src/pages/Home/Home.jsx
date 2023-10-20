import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="py-20 flex flex-row">
      <div className="w-[45%]  my-0 mx-20 flex flex-col justify-center items-start text-start ">
        <p className="text-6xl text-gray-600 font-semibold pb-5 dark:text-white">
          Start Your <b>Coding</b> Journey Today
        </p>
        <span className="text-2xl text-slate-700 dark:text-gray-100">
          Learn to code from scratch with job focussed courses designed by
          experts.
        </span>
        <Link to={"/login"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-4 my-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Login
          </button>
        </Link>
      </div>
      <div className="">
        <img className="h-auto max-w-lg ml-auto" src="images/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
