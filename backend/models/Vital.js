const mongoose = require("mongoose");

const VitalSchema = new mongoose.Schema({
  heartRate: Number,
  spo2: Number,
  temperature: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Vital", VitalSchema);
