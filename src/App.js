import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Make Profile Route Protected */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
