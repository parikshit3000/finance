const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  dotenv = require("dotenv"),
  path = require("path");

const Route = require("./routes/routes");

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, function (req, res) {
  console.log("Server started at port 3000");
});

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Middleware
app.use(express.json());

// Routes
app.use("/", Route);