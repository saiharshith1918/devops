const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Automated test number 2!");

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
