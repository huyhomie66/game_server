const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./connectDB");

const app = express();

const dotenv = require("dotenv");

const { login } = require("../service/user");
const { createUserAsked, createUserAnswer } = require("../service/ask");

dotenv.config();

const port = process.env.PORT || 8888;

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send("It's working!"));

app.post("/login", async (req, res, next) => {
  const { email, name, avatar } = req.body;
  const result = await login({ email, name, avatar });
  res.send(JSON.stringify(result));
});

app.post("/create-ask", async (req, res, next) => {
  const { userId, question, from } = req.body;
  const result = await createUserAsked({ userId, question, from });
  res.send(JSON.stringify(result));
});

app.post("/create-answer", async (req, res, next) => {
  const { askId, userId, questionId, answer, from } = req.body;
  const result = await createUserAnswer({
    askId,
    userId,
    questionId,
    answer,
    from,
  });
  res.send(JSON.stringify(result));
});

app.listen(port, function () {
  console.log("Your app running on port " + port);
});
