const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors/index.js");

async function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid Authentication");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { usedId: payload.userId, name: payload.name };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
}

module.exports = validateToken;
