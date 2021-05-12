const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const checkJwt = (req, res, next) => {
  const token = getTokenFromHeaders(req.headers);

  if (!token) {
    return res.status(401).json({ error: "Invalid token 1" });
  }
  try {
    const decoded = verifyJwt(token);
    req.id = decoded.id;
  } catch (error) {
    return res.json({ error: "Invalid token 2" });
  }

  next();
};

module.exports = checkJwt;
