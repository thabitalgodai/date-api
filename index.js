const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const now = new Date();

  res.json({
    status: "ok",
    full_date: now.toString(),
    iso: now.toISOString(),
    timestamp: now.getTime()
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
