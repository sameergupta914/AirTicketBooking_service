'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'cityId',
        onDelete:'CASCADE'
      });
    }
  }
  Airport.init({
    Name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:true
    } ,
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};