import React from "react";

const TableComponent = () => {
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
              Difficulty
            </th>
            <th scope="col" className="px-6 py-3">
              Frequency
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1. Number of Ways to Stay in the Same Place After Some Steps
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">47.5%</td>
            <td className="px-6 py-4">Hard</td>
            <td className="px-6 py-4">Edit</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2. Two Sum
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">50.8%</td>
            <td className="px-6 py-4">Easy</td>
            <td className="px-6 py-4">Edit</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3. Add Two Numbers
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">41.4%</td>
            <td className="px-6 py-4">Medium</td>
            <td className="px-6 py-4">Edit</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              4. Longest Substring Without Repeating Characters
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">34.1%</td>
            <td className="px-6 py-4">Medium</td>
            <td className="px-6 py-4">Edit</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              5. Median of Two Sorted Arrays
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">38.1%</td>
            <td className="px-6 py-4">Hard</td>
            <td className="px-6 py-4">Edit</td>
          </tr>

          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              6. Longest Palindromic Substring
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">32.8%</td>
            <td className="px-6 py-4">Mediun</td>
            <td className="px-6 py-4">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
