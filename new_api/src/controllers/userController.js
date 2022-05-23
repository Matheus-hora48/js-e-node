import User from "../models/user";

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: "Matheus",
      email: "teste@email.com",
      password: "123456",
    });
    res.json(novoUser);
  }
}

export default new UserController();
