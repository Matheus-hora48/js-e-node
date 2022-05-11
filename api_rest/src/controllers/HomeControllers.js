import Aluno from '../models/aluno'

class HomeController {
  index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Hora',
      email: 'teste@email.com',
      idade: 20,
      peso: 78,
      altura: 1.70,
    })
    res.json(novoAluno);
  }
}

export default new HomeController();
