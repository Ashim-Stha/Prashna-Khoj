const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { queryData } = require("./config/connectDB");
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  await queryData();
  res.json("hello");
});

app.listen(5000, () => {
  console.log("Server ruunnnninnnnng");
});
