import { Building2, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Dialog from "../Dialog";
import { useUserContext } from "../../hooks/useUserContext";
import Spinner from "../Spinner";
const WorkExpProfile = () => {
  const { user } = useUserContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [data, setData] = useState({
    position: "",
    company: "",
    start: "",
    end: "",
    userId: user?.id,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      setFetchLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/api/users/userDetail/${user?.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Network response was not ok:", errorData);
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        const workDetail = json?.work;
        setWork(workDetail);
        console.log(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setFetchLoading(false);
      }
    };

    if (user?.id) {
      fetchUserData();
    }
  }, [user?.id]);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    if (
      data.position.length <= 0 ||
      data.company.length <= 0 ||
      data.end.length <= 0 ||
      data.start.length <= 0
    ) {
      setError("All Fields Required");
    } else {
      try {
        console.log({ ...data });
        const response = await fetch("http://localhost:4000/api/work", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Corrected content type
          },
          body: JSON.stringify({ ...data }),
        });

        const json = await response.json();
        console.log(json);

        if (response.ok) {
          setOpenDialog(false);
          // window.location.reload(false);
        } else {
          setError(json.error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred while submitting the data.");
      }
    }
    setLoading(false);
  };
  if (fetchLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-row justify-between pb-2 border-b border-gray-200">
      <div className="w-[30%] justify-start text-start mt-4 pr-16">
        <h2 className="text-2xl font-semibold dark:text-white">
          Your work experience
        </h2>
        <p className="text-slate-400 text-xs">
          What other positions have you held?
        </p>
      </div>
      <div className="flex flex-1 flex-col">
        {work?.map((item, index) => (
          <div
            key={index}
            className="flex bg-gray-50 flex-row my-4 mr-3 gap-4 rounded-md border border-gray-300 px-6 py-1 items-center dark:bg-gray-700 dark:border-gray-600"
          >
            <div>
              <Building2 size={35} className="text-gray dark:text-white" />
            </div>
            <div className="flex w-full flex-col text-left m-2">
              <div className="flex justify-between">
                <h3 className="font-semibold dark:text-white">
                  {item?.position}
                </h3>
                <p className="text-xs text-gray-500 cursor-pointer">Edit</p>
              </div>
              <span className="text-[14px] text-blue-600">{item?.company}</span>
              <span className="text-slate-400 text-xs">
                {item?.start} - {item?.end}
              </span>
            </div>
          </div>
        ))}
        <p
          onClick={() => setOpenDialog(true)}
          className="text-start cursor-pointer flex items-center gap-1 text-xs text-blue-800"
        >
          <Plus size={14} />
          Add your work Experience
        </p>
      </div>
      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Add Your Work Experience"}
        children={
          <div>
            <label className="block text-start text-sm font-medium text-gray-900 dark:text-white">
              Position
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Position"
              value={data.position}
              onChange={(e) => setData({ ...data, position: e.target.value })}
            />
            <label className="block text-start text-sm font-medium text-gray-900 dark:text-white">
              Company
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Company Name"
              value={data.company}
              onChange={(e) => setData({ ...data, company: e.target.value })}
            />
            <div className="flex gap-8">
              <div className="flex-1">
                <label className="block text-start text-sm font-medium text-gray-900 dark:text-white">
                  Start Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Start Date"
                  value={data.start}
                  onChange={(e) => setData({ ...data, start: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label className="block text-start text-sm font-medium text-gray-900 dark:text-white">
                  End Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter End Date"
                  value={data.end}
                  onChange={(e) => setData({ ...data, end: e.target.value })}
                />
              </div>
            </div>
            {error && <div className="text-xs text-red-500">{error}</div>}
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              {loading ? <Spinner /> : "Save"}
            </button>
          </div>
        }
      />
    </div>
  );
};

export default WorkExpProfile;
