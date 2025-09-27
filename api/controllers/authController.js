const { getUserByUsername, createUser } = require("../models/user");
const { hashPassword } = require("../utils/hash");
const { comparePassword } = require("../utils/hash");
const { requireUsernameAndPassword } = require("../utils/validation");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    if (!requireUsernameAndPassword(req, res)) return;

    const existingUser = await getUserByUsername(username);
    if (existingUser) return res.status(409).send("User already exists");

    const hashedPassword = await hashPassword(password);
    const user = await createUser(username, hashedPassword);

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    if (!requireUsernameAndPassword(req, res)) return;

    const user = await getUserByUsername(username);
    if (!user) return res.status(401).send("Invalid credentials");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) return res.status(401).send("Invalid credentials");
    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    req.session.user = { id: user.id, username: user.username };

    res.status(200).json({
      message: "Login successful",
      userId: user.id,
      token,
      sessionId: req.sessionID,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
}

module.exports = { signup, login };
