import { createContext, useReducer, useEffect } from "react";
export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
export const UserContextProvider = ({ childern }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    userData: null,
  });
};
// useEffect(() => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   dispatch({ type: "LOGIN", payload: user });
//   const fetchData = async () => {
//     const response = await fetch();
//   };
// }, []);
