const express = require("express");
const router = express.Router();
const authenticationMiddleware = require("../middleware/errorHandler")
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/authController");

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get current user information (protected route)
router.get("/current", authenticationMiddleware, currentUser);

module.exports = router;
