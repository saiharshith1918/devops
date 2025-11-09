const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Through poll scm, testing at 11:34");
  res.send("✅ Jenkins pipeline test successful — app is running!");
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
