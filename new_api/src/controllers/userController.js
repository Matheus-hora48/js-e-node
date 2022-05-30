import User from "../models/user";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await User.findByPK(req.params.id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }

      const novosDados = await user.update(req.body);

      await user.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
