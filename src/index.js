require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const checkJwt = require("./middlewares/jwt");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(router);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server start 🔥", PORT);
  });
});
