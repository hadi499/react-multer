const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection DB is oke!");
});

const articlesRouter = require("./routes/articles");
app.use("/articles", articlesRouter);
app.listen(port, () => console.log("server is running"));
