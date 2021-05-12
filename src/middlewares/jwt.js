const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const pathExchuded = (path) => {
  const excludePaths = ["/login", "/sign-up"];

  const isExcluded = !!excludePaths.find((isPath) => isPath.startsWith(path));

  return isExcluded;
};

const checkJwt = (req, res, next) => {
  const { url: path } = req;

  if (pathExchuded(path)) return next();

  const token = getTokenFromHeaders(req.headers);

  if (!token) {
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    const decoded = verifyJwt(token);
    req.accountId = decoded.id;
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }

  next();
};

module.exports = checkJwt;
