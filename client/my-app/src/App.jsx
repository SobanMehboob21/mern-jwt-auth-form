import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupForm from "./components/signup.jsx";

function App() {
  return (
    <>
      <h1>Working</h1>
      <Link to="/signup">Signup</Link>

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
