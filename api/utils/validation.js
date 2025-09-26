function requireUsernameAndPassword(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Username and password are required");
    return false;
  }
  return true;
}

module.exports = { requireUsernameAndPassword };
