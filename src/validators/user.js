const Joi = require("@hapi/joi");

const rules = {
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z-0-9]{8,30}$")),
  password_confirmation: Joi.string().valid(Joi.ref("password")).required(),
};

const options = { abortEarly: false };

const accountSingIn = (req, res, next) => {
  const { email, password } = req.body;
  const shema = Joi.object({
    email: rules.email,
    password: rules.password,
  });

  const { error } = shema.validate({ email, password }, options);

  if (error) {
    return res.status(400).json(null, null, { error: "" });
  }

  next();
};

const accountSingUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;

  console.log({ email, password, password_confirmation });
  const shema = Joi.object({
    email: rules.email,
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  });

  const { error } = shema.validate(
    { email, password, password_confirmation },
    options
  );

  if (error) {
    return res.status(400).json({ error: "Senhas não confere." });
  }

  next();
};

module.exports = { accountSingUp, accountSingIn };
