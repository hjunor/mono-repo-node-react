const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "profile"),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "tmp", "profile"));
    },

    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, file.key);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const alloweMimes = ["image/jpeg", "image/pjpeg", "image/png"];
    if (alloweMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Tipo de arquivo invalido"));
    }
  },
};
