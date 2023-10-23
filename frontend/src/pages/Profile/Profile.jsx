import React from "react";
import AboutProfile from "../../Components/Profile/AboutProfile";
import WorkExpProfile from "../../Components/Profile/WorkExpProfile";
// import EducationProfile from "../../Components/Profile/EducationProfile";
// import AddTagProfile from "../../Components/Profile/AddTagProfile";
// import Dialog from "../../Components/Dialog";

function Profile() {
  return (
    <div className="dark:bg-gray-900">
      <div className="pt-24 flex flex-row justify-between mx-32">
        <div className="flex flex-col mt-16">
          <span className="text-3xl font-semibold	mb-4 dark:text-white">
            Edit your Codechamp Profile
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-6 mx-32 my-6 dark:bg-gray-800 dark:border-gray-700">
        <AboutProfile />
        <WorkExpProfile />
        {/* <EducationProfile /> */}
        {/* <AddTagProfile /> */}
      </div>
    </div>
  );
}

export default Profile;
