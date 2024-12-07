const express = require("express");
const authController = require("../controllers/authController");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/signup",
  [check("email").isEmail(), check("password")],
  authController.registerUser
);
router.post("/signin", authController.authUser);

module.exports = router;
