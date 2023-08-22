const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
const createUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, surname, email, mobile, password } = req.body;
  if (!firstName || !lastName || !surname || !email || !mobile || !password) {
    const error = new Error("All fields are required!");
    error.status = 400;
    return next(error);
  }

  const user = await User.create({
    firstName,
    lastName,
    surname,
    email,
    mobile,
    password,
  });

  res.status(201).json(user);
});

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  if (!users || users.length === 0) {
    const error = new Error("No users found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json({ users });
});

// @desc    Get a user by ID
// @route   GET /api/users/:id
// @access  Public
const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(user);
});

// @desc    Update a user by ID
// @route   PUT /api/users/:id
// @access  Public
const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(user);
});

// @desc    Delete a user by ID
// @route   DELETE /api/users/:id
// @access  Public
const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(user);
});

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
