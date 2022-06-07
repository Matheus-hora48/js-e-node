"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _user2.default.create(req.body);
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
      const users = await _user2.default.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await _user2.default.findByPK(req.params.id);
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

      const user = await _user2.default.findByPk(req.userId);

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
      const user = await _user2.default.findByPk(req.userId);

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

exports. default = new UserController();
