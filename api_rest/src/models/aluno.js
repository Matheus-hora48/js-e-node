import Sequelize, { Model } from 'sequelize'

export default class Aluno extends Model {
  static init(sequelize){
    super.init({
      nome: sequelize.STRING,
      sobrenome: sequelize.STRING,
      email: sequelize.STRING,
      idade: sequelize.INTEGER,
      peso: sequelize.FLOAT,
      altura: sequelize.FLOAT,
    }, {
      sequelize,
    })
    return this
  }
}