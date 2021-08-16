const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    questions: { type: String },
    askId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
