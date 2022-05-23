import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs'

export default class UserController extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        email:{
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 64],
              msg: 'A senha precisa ter entre 6 e 64 caracteres',
            },
          },
        },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8)
    })

    return this;
  }
}
