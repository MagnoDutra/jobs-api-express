const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

async function register(req, res) {
  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

async function login(req, res) {
  res.send("login user");
}

module.exports = {
  register,
  login,
};
