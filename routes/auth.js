const express = require("express");
const router = express.Router();
const { registerUser, verifyUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/verify-registration", verifyUser);  // changed to POST
router.post("/login", loginUser);                 // new route

module.exports = router;








``