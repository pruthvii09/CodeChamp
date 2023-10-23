import React from "react";
import AllUsers from "../../Components/admin/AllUsers";

const Admin = () => {
  return (
    <div className="pt-[75px] flex gap-5">
      <div className="flex flex-col border-r h-screen pt-10">
        <div className="px-12 hover:bg-slate-100 py-2 cursor-pointer">
          All Users
        </div>
        <div className="px-12 hover:bg-slate-100 py-2 cursor-pointer">
          All Test
        </div>
        <div className="px-12 hover:bg-slate-100 py-2 cursor-pointer">
          All Questions
        </div>
        <div className="px-12 hover:bg-slate-100 py-2 cursor-pointer">
          All Users
        </div>
      </div>
      <div className="pt-10">
        <AllUsers />
      </div>
    </div>
  );
};

export default Admin;
