const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, surname, email, mobile, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)

    // Create a new user record
    const user = new User({
      firstName,
      lastName,
      surname,
      email,
      mobile,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Check if the provided password matches the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Create and sign a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
    });

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// @desc Get current user's information
// @route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  try {
    // The user information is available in req.user due to authentication middleware
    if (!req.user) {
      throw new Error("User not authenticated");
    }

    const user = await User.findById(req.user.userId);

    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json({ message: "Current user information", user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
