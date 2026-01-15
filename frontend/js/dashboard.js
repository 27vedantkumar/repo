function sendVitals() {
  const vitals = {
    heartRate: Math.floor(Math.random() * 40) + 60,
    spo2: Math.floor(Math.random() * 5) + 95,
    temperature: (Math.random() * 2 + 36).toFixed(1)
  };

  fetch("http://localhost:5000/api/vitals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vitals)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText =
      JSON.stringify(data, null, 2);
  });
}
