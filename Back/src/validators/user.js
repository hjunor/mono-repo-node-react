const Joi = require('@hapi/joi');

const rules = {
  email: Joi.string().email().required(),
  password: Joi.string(),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
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
    return res.status(400).json({ error: { mensagem: 'error senhas' } });
  }

  next();
};

const accountSingUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;

  const shema = Joi.object({
    email: rules.email,
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  });

  console.log(shema);

  const { error } = shema.validate(
    { email, password, password_confirmation },
    options,
  );

  if (error) {
    return res.status(400).json({ error: { message: 'Senhas não confere.' } });
  }

  next();
};

module.exports = { accountSingUp, accountSingIn };
