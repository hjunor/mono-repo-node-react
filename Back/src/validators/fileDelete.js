const fs = require('fs');
const path = require('path');

module.exports = async (filename) => {
  const filePath = path.resolve(
    __dirname,
    '..',
    '..',
    'tmp',
    'uploads',
    `${filename}`,
  );

  const file = await fs.existsSync(filePath);

  if (!file) {
    return false;
  }
  fs.unlinkSync(filePath);

  return true;
};
