import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="py-20 flex flex-row">
      <div className="w-30rem my-0 mx-20 flex flex-col justify-center items-center ">
        <p className="text-6xl text-gray-600 font-semibold	pb-5">
          Start your coding journey today
        </p>
        <span className="text-2xl text-slate-700">
          Learn to code from scratch with job focussed courses designed by
          experts.
        </span>
        <Link to={"/login"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 my-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Login
          </button>
        </Link>
      </div>
      <div className="">
        <img
          className="h-auto max-w-lg ml-auto "
          src="images/homeimg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
