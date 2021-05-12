require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenPrivatekey = process.env.JWT_PRIVATE_KEY;

const options = { expiresIn: "30 minutes" };

const generateJwt = (payload) => {
  return jwt.sign(payload, tokenPrivatekey, options);
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivatekey);
};

const getTokenFromHeaders = (headers) => {
  const token = headers["authorization"];
  return token ? token.slice(7, token.length) : null;
};
module.exports = {
  generateJwt,
  generateRefreshJwt,
  verifyJwt,
  verifyRefreshJwt,
  getTokenFromHeaders,
};
