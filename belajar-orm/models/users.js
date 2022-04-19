'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({email, password}) => {
      const encryptedpassword = this.#encrypt(password)


      return this.create({email, password: encryptedpassword})
    }

    checkPassword = password => bcrypt.compareSync(password, this.password)

    static generateToken = (user) => {
      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email
      }

      const key = 'harisenin'

      const token = jwt.sign(payload, key)

      return token
    }

    static authenticate = async ({email, password}) => {
      try {
        const user = await this.findOne({where: {email}})

        if(!user) return Promise.reject('Wrong email or password')

        const isPasswordValid = user.checkPassword(password)

        if(!isPasswordValid) return Promise.reject('Wrong email or password')

        return Promise.resolve(user)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};