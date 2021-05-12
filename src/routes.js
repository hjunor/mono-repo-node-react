const Auth = require("./controller/Auth");

const router = require("express").Router();

const { accountSingUp, accountSingIn } = require("./validators/user");

router.post("/", accountSingUp, Auth.create);
router.get("/", Auth.store);
router.post("/login", accountSingIn, Auth.index);

module.exports = router;
