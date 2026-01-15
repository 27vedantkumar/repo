const express = require("express");
const Vital = require("../models/Vital");
const router = express.Router();

router.post("/vitals", async (req, res) => {
  const vital = new Vital(req.body);
  await vital.save();

  let alert = null;
  if (req.body.heartRate > 100) {
    alert = "High heart rate detected!";
  }

  res.json({ message: "Vitals saved", alert });
});

module.exports = router;
