import { Building2 } from "lucide-react";
import React from "react";

const data = [
  {
    id:1,
    companyName:"Cloud Scale",
    desc:"Transforming Cloud, Data Center Management and Profitability with integrated Data-insights",
    maxEmp: 10,
    minEmp: 1,
    position:"Intern",
    payScale:10000,
    location:"Chandigarh",
    time:"2 days ago",
    processTime:" 1 DAY AGO"
  },
  {
    id:2,
    companyName:"Cloud Scale",
    desc:"Transforming Cloud, Data Center Management and Profitability with integrated Data-insights",
    maxEmp: 10,
    minEmp: 1,
    position:"Intern",
    payScale:10000,
    location:"Chandigarh",
    time:"2 days ago",
    processTime:" 1 DAY AGO"
  },
  {
    id:3,
    companyName:"Cloud Scale",
    desc:"Transforming Cloud, Data Center Management and Profitability with integrated Data-insights",
    maxEmp: 10,
    minEmp: 1,
    position:"Intern",
    payScale:10000,
    location:"Chandigarh",
    time:"2 days ago",
    processTime:" 1 DAY AGO"
  }
]

function Jobs() {
  return (
<<<<<<< HEAD
    <div className="mt-20 text-start mx-20">
      <h1 className="text-3xl	pb-10 font-normal pl-3">Search for jobs</h1>
      {
        data.map((item)=> (
          <div className="py-8 px-6 border border-gray-300 bg-gray-50 shadow-md	mb-6 mx-5 rounded-lg">
        <div className="flex flex-row gap-3">
          <div className=" align-middle pl-2 inline-flex flex-row items-center border border-gray-400 bg-gray-100  rounded-md h-12 w-12">
            <Building2 />
=======
    <div className="mt-20 p-10 text-start mx-20">
      <div>
        <h1 className="text-3xl	pb-10 font-normal pl-3">Search for jobs</h1>
        <div className="pt-2 pl-2 border border-gray-300 bg-slate-100 mx-5 rounded-sm">
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
>>>>>>> 7793806 (chnages in profile)
          </div>
          <div className="flex flex-col  ">
            <p className="text-black text-xl  font-bold">{item.companyName}</p>
            <p className="text-black">{item.desc}
            </p>
            <p className="text-slate-400">{`${item.minEmp}-${item.maxEmp} Employee`}</p>
          </div>
        </div>

        <div className="flex flex-row cursor-pointer border-2 mt-2 py-2 px-4 border-gray-200 bg-slate-100 rounded-lg mx-5 mb-5">
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col">
              <p>{item.position}</p>
              <p>{item.payScale}</p>
            </div>
            <p>{item.location}</p>
          </div>
          <div className="flex flex-row ml-20 gap-3">
            <div className="flex flex-col">
              <p className="text-xs text-lime-600">
                 {`PROCESSED AN APPLICATION ${item.processTime}`}
              </p>
              <span className="text-xs text-slate-400">{`POSTED ${item.time}`}</span>
            </div>
            <button
              type="button"
              class="py- px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Save
            </button>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
        ))

      }
      
    </div>
  );
}

export default Jobs;
