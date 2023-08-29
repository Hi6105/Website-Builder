const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");

require("dotenv").config(".env");
const app = express();
const port = 7000;
connectDb();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
