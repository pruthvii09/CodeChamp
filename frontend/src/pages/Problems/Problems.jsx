import React from "react";
import "../../Components/Table/TableComponent";
import TableComponent from "../../Components/Table/TableComponent";
import TableHeader from "../../Components/Table/TableHeader";
function Problems() {
  return (
    <div className="py-20 mt-10 px-16 relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableHeader />
      <TableComponent />
    </div>
  );
}

export default Problems;
