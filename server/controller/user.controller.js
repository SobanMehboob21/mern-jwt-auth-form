import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import dotenv from "dotenv";

dotenv.config();

export const UserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const createUser = await User.create({ username, email, password });

    const token = jwt.sign(
      {
        id: createUser._id,
        username: createUser.username,
        email: createUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: createUser._id,
        username: createUser.username,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.error("Error in UserController:", error.message);
    return res.status(500).json({
      message: "Error occurred in controller",
      error: error.message,
    });
  }
};

export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      return res.status(404).json({ message: "User not found. Please signup." });
    }

    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

  
    const token = jwt.sign(
      { id: loginUser._id, email: loginUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: loginUser._id,
        username: loginUser.username,
        email: loginUser.email,
      },
    });
  } catch (error) {
    console.error("Error in userLoginController:", error.message);
    return res.status(500).json({
      message: "Error occurred in controller",
      error: error.message,
    });
  }
};
