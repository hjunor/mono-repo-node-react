const Auth = require("./controller/Auth");
const checkJwt = require("./middlewares/jwt");
const router = require("express").Router();

const { accountSingUp, accountSingIn } = require("./validators/user");

router.post("/sign-up", accountSingUp, Auth.create);
router.get("/", checkJwt, Auth.store);
router.post("/login", accountSingIn, Auth.index);

module.exports = router;
