import React, { useEffect, useState } from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";
const TableComponent = () => {
  const navigate = useNavigate();
  const [problems, setProblems] = useState(null);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/question", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setProblems(json.questions);
        console.log(problems);
        console.log(json);
      } catch (err) {
        console.error("Error while fetching data");
      }
    };
    fetchProblems();
  }, []);
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Solution
            </th>
            <th scope="col" className="px-6 py-3">
              Acceptance
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Frequency
            </th>
          </tr>
        </thead>

        <tbody>
          {problems?.map((item) => (
            <tr
              onClick={() => navigate(`/coading/${item._id}`)}
              key={item._id}
              className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4"></td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.number}. {item.title}
              </th>
              <td className="px-6 py-4">Click Here</td>
              <td className="px-6 py-4">47.5%</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
