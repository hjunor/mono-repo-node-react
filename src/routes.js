const multerProfile = require('./config/multer-profile');
const multerUpload = require('./config/multer-upload');
const AuthController = require('./controller/Auth');
const checkJwt = require('./middlewares/jwt');
const router = require('express').Router();
const multer = require('multer');

const { accountSingUp, accountSingIn } = require('./validators/user');
const BiographyController = require('./controller/Biography');
const BankController = require('./controller/Bank');
const ArtsController = require('./controller/Arts');
const CategoryController = require('./controller/Category');
const TypesController = require('./controller/Types');
const adminCheck = require('./middlewares/adminCheck');
const { response } = require('express');

router.post('/sign-up', accountSingUp, AuthController.create);
router.get('/', checkJwt, AuthController.store);
router.post('/login', accountSingIn, AuthController.index);
router.get('/verify/:token', AuthController.verify);

router.get('/category/:id', CategoryController.index);
router.get('/types/:id', TypesController.index);

router.get('/arts', checkJwt, ArtsController.indexAll);
router.get('/arts/:id', checkJwt, ArtsController.index);
router.delete('/arts/:id', checkJwt, ArtsController.destroy);
router.patch('/arts/:id', checkJwt, adminCheck, ArtsController.updateOne);

router.get('/token', checkJwt, (req, res) => {
  return res.status(200).json({ token: true });
});
router.get('/admin', checkJwt, adminCheck, (req, res) => {
  return res.status(200).json({ token: true });
});

router.put(
  '/arts/:id',
  multer(multerUpload).single('file'),
  checkJwt,
  ArtsController.update,
);

router.post(
  '/arts',
  checkJwt,
  multer(multerUpload).single('file'),
  ArtsController.create,
);

router.post('/bank', checkJwt, BankController.update);

router.post(
  '/biography',
  checkJwt,
  multer(multerProfile).single('file'),
  BiographyController.update,
);

module.exports = router;
