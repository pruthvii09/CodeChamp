import { Building2 } from "lucide-react";
import React from "react";

function Jobs() {
  return (
    <div className="mt-20 p-10 text-start mx-20">
      <div>
        <h1 className="text-3xl	pb-10 font-normal pl-3">Search for jobs</h1>
        <div className="border border-gray-300 bg-gray-50 rounded-lg px-8 py-6">
          <div className="flex flex-row gap-3">
            <div className=" align-middle pl-2 inline-flex flex-row items-center border border-gray-400 bg-gray-100  rounded-md h-12 w-12">
              <Building2 />
            </div>
            <div className="flex flex-col">
              <p className="text-black text-xl  font-bold">Cloud Scale</p>
              <p className="text-black">
                Transforming Cloud, Data Center Management and Profitability
                with integrated Data-insights
              </p>
              <p className="text-slate-400">1-10 Employees</p>
            </div>
          </div>

          <div className="flex flex-row cursor-pointer border-2 mt-2 py-2 px-4 border-gray-200 bg-slate-100 rounded-lg mx-5 mb-5">
            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col">
                <p>Intern - Full Stack Engineer</p>
                <p>₹5,000 – ₹20,000</p>
              </div>
              <p>Chandigarh Onsite or remote</p>
            </div>
            <div className="flex flex-row ml-20 gap-3">
              <div className="flex flex-col">
                <p className="text-xs text-lime-600">
                  PROCESSED AN APPLICATION 1 DAY AGO
                </p>
                <span className="text-xs text-slate-400">
                  POSTED 2 WEEKS AGO
                </span>
              </div>
              <button
                type="button"
                className="px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Save
              </button>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Learn More
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
