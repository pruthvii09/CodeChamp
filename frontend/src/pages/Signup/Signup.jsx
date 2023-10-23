import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useUserContext } from "../../hooks/useUserContext";
import Spinner from "../../Components/Spinner";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    isAdmin: false,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const { dispatch } = useUserContext();
  const handleSignin = async () => {
    setError("");
    setLoading(true);
    if (data.name.length <= 0) {
      setErrorType("name");
      setError("Name is Required");
      console.log(error);
    } else if (data.email.length <= 0) {
      setErrorType("email");
      setError("Email is Required");
    } else if (data.contact.length !== 10) {
      setErrorType("contact");
      setError("Contact No is Exactly 10 digits");
    } else if (data.password.length <= 0) {
      setErrorType("password");
      setError("Password is Required");
    } else {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }), // ... spread opeator
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json);
        dispatch({ type: "LOGIN", payload: json });
        setData({
          name: "",
          email: "",
          contact: "",
          password: "",
          isAdmin: false,
        });
        navigate("/");
      }
      if (!response.ok) {
        setError(json.error);
        setErrorType("general");
      }
    }
    setLoading(false);
  };
  return (
    <section className="bg-gray-50 py-40 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          ChodeChamp
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                {errorType === "name" ? (
                  <div className="flex gap-1 items-center text-red-500 text-xs mt-2">
                    <AlertCircle size={16} />
                    <p>{error}</p>
                  </div>
                ) : null}
              </div>
              <div>
                <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                {errorType === "email" ? (
                  <div className="flex gap-1 items-center text-red-500 text-xs mt-2">
                    <AlertCircle size={16} />
                    <p>{error}</p>
                  </div>
                ) : null}
              </div>
              <div>
                <label className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  Your Contact No.
                </label>
                <input
                  type="text"
                  name="contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Contact No."
                  value={data.contact}
                  // value={data.contact}
                  onChange={(e) =>
                    setData({ ...data, contact: e.target.value })
                  }
                />
                {errorType === "contact" ? (
                  <div className="flex gap-1 items-center text-red-500 text-xs mt-2">
                    <AlertCircle size={16} />
                    <p>{error}</p>
                  </div>
                ) : null}
              </div>
              <div>
                <label className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                {errorType === "password" ? (
                  <div className="flex gap-1 items-center text-red-500 text-xs mt-2">
                    <AlertCircle size={16} />
                    <p>{error}</p>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              {errorType === "general" ? (
                <div className="flex gap-1 items-center text-red-500 text-xs mt-2">
                  <AlertCircle size={16} />
                  <p>{error}</p>
                </div>
              ) : null}
              <button
                style={{ marginTop: "8px" }}
                onClick={handleSignin}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {loading ? <Spinner /> : `Sign in`}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already an account yet?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
