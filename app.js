const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🔥 Deployed via Jenkins + Docker + Kubernetes 🔥");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
