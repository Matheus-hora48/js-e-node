import Aluno from "../models/aluno";

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll();
    res.json(aluno);
  }
}

export default new AlunoController();
