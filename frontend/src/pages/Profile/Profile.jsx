import React from "react";
import AboutProfile from "../../Components/Profile/AboutProfile";
import WorkExpProfile from "../../Components/Profile/WorkExpProfile";
import EducationProfile from "../../Components/Profile/EducationProfile";
import AddTagProfile from "../../Components/Profile/AddTagProfile";

function Profile() {
  return (
    <div>
      <div className="mt-24 flex flex-row justify-between mx-32">
        <div className="flex flex-col mt-16">
          <span className="text-3xl font-semibold	mb-4">
            Edit your Codechamp Profile
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-6 mx-32 mt-6">
        <AboutProfile />
        <WorkExpProfile />
        <EducationProfile />
        <AddTagProfile />
      </div>
    </div>
  );
}

export default Profile;
