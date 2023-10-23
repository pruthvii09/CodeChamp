import React, { useEffect, useState } from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import Dialog from "../Dialog";
const TableComponent = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [problems, setProblems] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [alreadyQuestion, setAlreadyQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAlreadyQuestion = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/code/alreadysubmit/${user?.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setAlreadyQuestion(json?.submittedQuestions);
      } catch (err) {
        console.error("Error while fetching data");
      }
    };

    if (user) {
      fetchAlreadyQuestion();
    }
  }, [user]);
  useEffect(() => {}, [alreadyQuestion]);
  useEffect(() => {
    setLoading(true);
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
      } catch (err) {
        console.error("Error while fetching data");
      }
    };
    fetchProblems();
    setLoading(false);
  }, []);
  const hanldeNavigate = (id, isSolved) => {
    if (isSolved) {
      setOpenDialog(true);
    } else {
      navigate(`/coading/${id}`);
    }
  };
  if (loading) {
    return <div>Loading....</div>;
  }
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
              Description
            </th>
          </tr>
        </thead>

        {loading ? (
          "Loading"
        ) : (
          <tbody>
            {problems?.map((item) => {
              const isSolved = alreadyQuestion?.some(
                (submitted) => submitted.questionId === item.id
              );
              return (
                <tr
                  onClick={() => hanldeNavigate(item?.id, isSolved)}
                  key={item?.id}
                  className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    {isSolved ? "Solved" : "Not Solved"}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.number}. {item.title}
                  </th>
                  <td className="px-6 py-4">{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Already Attempted"}
        children={<div>Please Try Different Question</div>}
      />
    </div>
  );
};

export default TableComponent;
