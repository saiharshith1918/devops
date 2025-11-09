const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Through poll scm");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
