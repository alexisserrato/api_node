const{ DataTypes } = require('sequelize');
const sequelize =require('../config/database');

const Usuario = sequelize.define('Usuario',{
  nombre:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  password: {                                
    type: DataTypes.STRING,
    allowNull: false,
    // defaultValue: '12345678'                
  }
});

module.exports  = Usuario;