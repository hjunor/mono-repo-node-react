const Bankinfo = require("../models/Bankinfo");
const User = require("../models/Users");

class BankinfoController {
  async update(req, res) {
    try {
      const { id, body } = req;

      const fields = ["name", "type", "agency", "account", "owner", "doc"];

      const { bankinfoId } = await User.findOne({ id });

      const bank = await Bankinfo.findOne({ bankinfoId });

      if (!bank)
        return res.status(400).json({ message: "Biografia não encontrada." });

      fields.map((fildName) => {
        const newValue = body[fildName];
        if (newValue != undefined) {
          bank[fildName] = newValue;
        }
      });

      await bank.save();

      return res.json({ bank });
    } catch (error) {
      return res.status(500).json({ exti: "error Servidor" });
    }
  }
}

module.exports = new BankinfoController();
