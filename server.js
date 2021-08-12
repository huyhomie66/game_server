const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require('./src/connectDB');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8888;

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send("It's working!"));

//listen port 
app.listen(port, function () {
    console.log("Your app running on port " + port);
})