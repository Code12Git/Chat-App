const { userModel } = require("../models");
const { CONFLICT, USER_NOT_FOUND } = require("../utils/errors");
const {AppError} = require("../utils");
const bcrypt = require("bcryptjs");

const register = async (body) => {
  try {
    const { email, username, name, password } = body;
    if (!email || !username || !name || !password) {
      throw new AppError({
        ...BAD_REQUEST,
        message: "All fields are required",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new AppError({ ...CONFLICT, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      username,
      name,
      password: hashedPassword,
    });

    return {
      email: newUser.email,
      username: newUser.username,
      name: newUser.name,
    };
  } catch (err) {
    throw err;
  }
};

const login = async (body) => {
  const { email, password } = body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new AppError({ ...USER_NOT_FOUND, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AppError({ ...USER_NOT_FOUND, message: "User not found" });
    }
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { register, login };
