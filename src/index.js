require("dotenv").config();
const path = require("path");
const express = require("express");
const db = require("./config/db");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT;
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(express.json());
app.use(router);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server start 🔥", PORT);
  });
});
