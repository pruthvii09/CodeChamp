import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout";
import Problems from "./pages/Problems/Problems";
import Profile from "./pages/Profile/Profile";
import Jobs from "./pages/Jobs/Jobs";
import Overview from "./pages/Overview/Overview";
import { useUserContext } from "./hooks/useUserContext";
import Coading from "./pages/coading/Coading";

function App() {
  const { user } = useUserContext();
  return (
    <div className="dark:bg-gray-900">
      <Router>
        <Layout />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to={"/problems"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to={"/problems"} /> : <Signup />}
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/problems"
            element={user ? <Problems /> : <Navigate to={"/login"} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/overview"
            element={user ? <Overview /> : <Navigate to={"/login"} />}
          />
          <Route path="/coading/:id" element={<Coading />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
