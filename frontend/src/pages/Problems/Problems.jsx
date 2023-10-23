import React from "react";
import "../../Components/Table/TableComponent";
import TableComponent from "../../Components/Table/TableComponent";
import TableHeader from "../../Components/Table/TableHeader";
function Problems() {
  return (
    <div className="py-20 h-[100vh] mt-10 px-36 relative overflow-x-auto shadow-md dark:bg-gray-900">
      <TableHeader />
      <TableComponent />
    </div>
  );
}

export default Problems;
