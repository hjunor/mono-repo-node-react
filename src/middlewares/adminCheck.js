const User = require('../models/Users');

const adminCheck = async (req, res, next) => {
  const { id } = req;

  const user = await User.findByPk(id);
  console.log(user);
  if (!user.provider) {
    return res.status(401).json({ data: { error: 'Somente adiminstradores' } });
  }

  next();
};

module.exports = adminCheck;
