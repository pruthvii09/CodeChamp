import React from "react";
import { Book, X } from "lucide-react";

function Profile() {
  return (
    <div>
      <div className="mt-24 flex flex-row justify-between mx-16">
        <div className="flex flex-col mt-16">
          <span className="text-3xl font-semibold	mb-4">
            Edit your Wellfound profile
          </span>
        </div>
        <div>
          <span>Profile last updated on: Aug 18, 2023</span>
        </div>
      </div>
      <div className="mx-16 flex flex-row justify-between border-b border-gray-200">
        <div className="flex flex-row gap-5 pb-3 ">
          <a>Overview</a>
          <a>Profile</a>
          <a>Resume/CV</a>
          <a>Preferences</a>
          <a>Culture</a>
        </div>

        <div className="">
          <a>Profile Views</a>
          <a>View public profile</a>
        </div>
      </div>

      <div className="rounded-lg border border-gray-300 bg-white p-6 mt-6 mx-5">
        <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
          <div className=" justify-start text-start">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="text-slate-400	">
              Tell us about yourself so startups know who you are.
            </p>
          </div>

          <div className="">
            <div>
              <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                Your Name
              </label>
              <input
                type="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                Where are you based?*
              </label>
              <input
                type="text"
                name="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9785925486"
              />
            </div>

            <div>
              <label className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select your primary role*
              </label>

              <button
                id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownDivider"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Software Engineer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mobile Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Android Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      iOS Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Frontend Engineer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Backend Enginner
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  Open to the following roles
                </label>
                <input
                  type="text"
                  name="contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  Your Bio
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
          <div className=" justify-start text-start mt-4">
            <h2 className="text-3xl font-semibold">Your work experience</h2>
            <p className="text-slate-400	">
              What other positions have you held?
            </p>
          </div>

          <div className="flex flex-row my-4 mr-3 gap-4 justify-between rounded-md border border-gray-300 border-t-1 border-r-1 border-b-3 bg-white bg-gradient-to-b from-gray-50 via-white to-transparent bg-bottom bg-no-repeat bg-contain">
            <div className="m-5">
              <Book />
            </div>
            <div className="flex flex-col text-left m-2">
              <h3 className="font-semibold	">Student</h3>
              <a>Modern College of Engineering, Pune</a>
              <span className="text-slate-400">Dec 2022 to Present</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
          <div className=" justify-start text-start mt-4">
            <h2 className="text-3xl font-semibold">Education</h2>
            <p className="text-slate-400	">
            What schools have you studied at?
            </p>
          </div>

          <div className="flex flex-row my-4 mr-3 gap-4 justify-between rounded-md border border-gray-300 border-t-1 border-r-1 border-b-3 bg-white bg-gradient-to-b from-gray-50 via-white to-transparent bg-bottom bg-no-repeat bg-contain">
            <div className="m-5">
              <Book />
            </div>
            <div className="flex flex-col text-left m-2">
              <h3 className="font-semibold	">Pes Modern College of Engineering</h3>
              <p>Computer Science and Engineering, BEng</p>
              <span>8.5 GPA</span>
              <span className="text-slate-400">2021</span>
            </div>
          </div>
        </div>


        <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
          <div className=" justify-start text-start mt-4">
            <h2 className="text-3xl font-semibold">Your Skills</h2>
            <p className="text-slate-400">
            This will help startups hone in on your strengths.
            </p>
          </div>

        <div className="">
            <span className="rounded-md text-black bg-slate-100">JavaScript</span>
            <span className="rounded-md text-black bg-slate-100">HTML</span>
            <span className="rounded-md text-black bg-slate-100">CSS</span>
            <span className="rounded-md text-black bg-slate-100">MongoDB</span>
            <span className="rounded-md text-black bg-slate-100">Node.js</span>
            <span className="rounded-md text-black bg-slate-100">React.js</span>
            <span className="rounded-md text-black bg-slate-100">MERN Stack - Javascript (ES5 & ES6), MongoDB, Express.Js, React, Node.Js</span>
          </div>
        </div>
       

        <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
          <div className=" justify-start text-start mt-4">
            <h2 className="text-3xl font-semibold">Achievements</h2>
            <p className="text-slate-400	">
            Sharing more details about yourself will help you stand out more.
            </p>
          </div>

          <div className="flex flex-row my-4 mr-3 gap-4 justify-between rounded-md border border-gray-300 border-t-1 border-r-1 border-b-3 bg-white bg-gradient-to-b from-gray-50 via-white to-transparent bg-bottom bg-no-repeat bg-contain">
            
          <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Profile;
