const express = require("express");
const cors = require("cors");
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const vitalRoutes = require("./routes/vitalRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", vitalRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
