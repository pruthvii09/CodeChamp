import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Layout from "./Components/Layout";
import Problems from "./pages/Problems/Problems";
import Profile from "./pages/Profile/Profile";
import Jobs from "./pages/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/jobs" element={<Jobs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
