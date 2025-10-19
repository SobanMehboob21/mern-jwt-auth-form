import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post("http://localhost:5000/user/api/signup", form);

      setMessage(res.data.message || "Signup successful!");
      setError("");
      console.log("Response:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed!");
      setMessage("");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Signup;
