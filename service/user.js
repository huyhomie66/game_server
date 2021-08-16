const User = require("../model/user");

const login = async ({ email, name, avatar = "" }) => {
  try {
    const result = await User.findOne({ email, name });

    if (!result) {
      await User.create({ email, name, avatar });
      return "created";
    }

    return "logged";
  } catch (error) {
    return error;
  }
};

module.exports = { login };
