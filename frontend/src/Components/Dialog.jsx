import { XCircle } from "lucide-react";
import React from "react";

const Dialog = ({ openDialog, setOpenDialog, title, children }) => {
  return (
    <div className={openDialog ? `block` : `hidden`}>
      <div className="fixed inline-block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-20 w-[450px] rounded-lg">
        <div className="flex items-center justify-between flex-row-reverse">
          <XCircle
            color="red"
            onClick={() => setOpenDialog(!openDialog)}
            className="cursor-pointer"
            size={20}
          />
          <h4 className="text-lg mt-1 font-normal text-blue-700">{title}</h4>
        </div>
        <div className="mt-[20px] text-start">{children}</div>
      </div>
      <div
        onClick={() => setOpenDialog(!openDialog)}
        className="fixed bg-opacity-20 top-0 left-0 h-screen w-screen bg-slate-800 cursor-pointer overflow-hidden"
      ></div>
    </div>
  );
};

export default Dialog;
