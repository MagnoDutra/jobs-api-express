const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const user = await User.create({ ...req.body });

  const token = jwt.sign(
    { userId: user._id, name: user.name },
    "jwtSecretTeste",
    { expiresIn: "30d" }
  );

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

async function login(req, res) {
  res.send("login user");
}

module.exports = {
  register,
  login,
};
