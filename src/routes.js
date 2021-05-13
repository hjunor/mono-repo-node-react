const multerProfile = require("./config/multer-profile");
const multerUpload = require("./config/multer-upload");
const AuthController = require("./controller/Auth");
const checkJwt = require("./middlewares/jwt");
const router = require("express").Router();
const multer = require("multer");

const { accountSingUp, accountSingIn } = require("./validators/user");
const BiographyController = require("./controller/Biography");
const BankController = require("./controller/Bank");

router.post("/sign-up", accountSingUp, AuthController.create);
router.get("/", checkJwt, AuthController.store);
router.post("/login", accountSingIn, AuthController.index);

router.post("/bank", checkJwt, BankController.update);
router.post(
  "/biography",
  checkJwt,
  multer(multerProfile).single("file"),
  BiographyController.update
);

module.exports = router;
