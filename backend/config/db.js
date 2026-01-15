// const mongoose = require("mongoose");

// mongoose.connect("YOUR_MONGODB_ATLAS_URL")
//   .then(() => console.log("Database connected"))
//   .catch(err => console.error(err));
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://bittujeebgp_db_user:P9oquFv8o2RyvgjW@kineticxsoul.djtcdq6.mongodb.net/?appName=KINETICxSOUL")
  .then(() => console.log("Database connected"))
  .catch(err => console.error(err));
