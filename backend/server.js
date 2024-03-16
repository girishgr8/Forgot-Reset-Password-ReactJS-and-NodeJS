require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Route = require("./routes/route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

app.use("/api", Route);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

module.exports = app;
