function verifySession(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Unauthorized: No session" });
  }
  req.user = req.session.user;
  next();
}

module.exports = verifySession;
