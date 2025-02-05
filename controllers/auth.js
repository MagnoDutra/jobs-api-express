const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  const user = await User.create({ ...req.body });

  res.status(StatusCodes.CREATED).json(user);
}

async function login(req, res) {
  res.send("login user");
}

module.exports = {
  register,
  login,
};
