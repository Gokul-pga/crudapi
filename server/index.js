const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const Cars = require("./routes/cars");
const Users = require("./routes/users");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("SERVER STARTED");
});
const MONGO = process.env.MONGODB;

mongoose.connect(MONGO).then((res) => console.log("DB CONNECTED"));

app.use("/api", Cars);
app.use("/auth", Users);
