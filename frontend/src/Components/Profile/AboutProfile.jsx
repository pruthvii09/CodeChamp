import React from "react";

const AboutProfile = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
        <div className="justify-start text-start w-[30%] pr-16">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-slate-400 text-xs">
            Tell us about yourself so startups know who you are.
          </p>
        </div>
        <div className="flex-1">
          <div className="mb-4">
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

          <div className="mb-4">
            <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
              Where are you based?*
            </label>
            <input
              type="text"
              name="Loaction"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Country"
            />
          </div>

          <div className="mb-4">
            <label className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Enter Github Profile *
            </label>
            <input
              type="text"
              name="contact"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
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
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
