const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Hello from Jenkins Auto Build Test v2!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
