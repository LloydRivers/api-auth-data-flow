const express = require("express");
const router = express.Router();
const verifySession = require("../middleware/sessionMiddleware");

router.get("/", verifySession, (req, res) => {
  res.status(200).json({ message: "Session route accessed", user: req.user });
});

module.exports = router;
