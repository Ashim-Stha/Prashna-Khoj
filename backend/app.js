const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/searchRoute");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(5000, () => {
  console.log("Server ruunnnninnnnng");
});
