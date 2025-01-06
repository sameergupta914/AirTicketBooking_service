'use strict';
const {
  Model
} = require('sequelize');

const bcrypt=require('bcrypt');
const { SALT }=require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:false,
      validate:{
        len:[3,300]
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  user.beforeCreate((User)=>{
    const encryptedpassword=bcrypt.hashSync(User.password, SALT);
    User.password=encryptedpassword;
  });

  return user;
};