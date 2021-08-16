const mongoose = require("mongoose");

const Ask = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    question: String,
    answer: String,
    from: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ask", Ask);
