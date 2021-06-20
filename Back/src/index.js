require('dotenv').config();
const path = require('path');
const express = require('express');
const db = require('./config/db');
const router = require('./routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')),
);
app.use(
  '/profile',
  express.static(path.resolve(__dirname, '..', 'tmp', 'profile')),
);

app.use(router);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Server start 🔥', PORT);
  });
});
