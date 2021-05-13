const config = require("./config/multer");
const Auth = require("./controller/Auth");
const checkJwt = require("./middlewares/jwt");
const router = require("express").Router();
const multer = require("multer");

const { accountSingUp, accountSingIn } = require("./validators/user");

router.post("/sign-up", accountSingUp, Auth.create);
router.get("/", checkJwt, Auth.store);
router.post("/login", accountSingIn, Auth.index);
router.post("/file", multer(config).single("file"), (req, res) => {
  const file = req.file.filename;
  console.log(file);
  return res.json("ok");
});
module.exports = router;
