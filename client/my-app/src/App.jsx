import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupForm from "./components/signup.jsx";
import Login from "./components/login.jsx";

function App() {
  return (
    <>
      <h1>Working</h1>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
