const Biography = require("../models/Biography");
const User = require("../models/Users");

class BiographyController {
  async update(req, res) {
    try {
      const { filename } = req.file;

      const { id, body } = req;

      body.photo = `http://localhost:3003/profile/${filename}`;

      const fields = [
        "photo",
        "resumer",
        "birthDate",
        "instagram",
        "facebook",
        "portfolioLink",
      ];

      const { biographyId } = await User.findOne({ id });

      const bio = await Biography.findOne({ biographyId });

      if (!bio)
        return res.status(400).json({ message: "Biografia não encontrada." });

      fields.map((fildName) => {
        const newValue = body[fildName];
        if (newValue != undefined) {
          bio[fildName] = newValue;
        }
      });

      await bio.save();

      return res.json({ bio });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ exti: "erroe" });
    }
  }
}

module.exports = new BiographyController();
