require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "השרת פועל" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("החיבור ל-MongoDB הצליח");
    app.listen(PORT, () => {
      console.log(`השרת מאזין בפורט ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("החיבור ל-MongoDB נכשל:", error.message);
    process.exit(1);
  });
