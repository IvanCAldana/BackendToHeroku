const {Sequelize,DataTypes} = require('sequelize');//para varias variables..sequelize...datatypes,usar llaves!!
// const Sequelize = require('sequelize');
const UserModel = require('./users.js'); //importa el module Js users de carpeta models.
const FilmModel = require('./films.js');

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });

//hacer conexion con base de datos usando sequelize framework. Aqui creamos el objeto sequelize cargado con informacion de conexion.
const sequelize = new Sequelize('5Q7fRekBLh', '5Q7fRekBLh', 'eax6pYRvYl', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

  // instanciamos el modelo de usuario (UserModel) como user
  const User = UserModel(sequelize,Sequelize);
  const Film = FilmModel(sequelize,Sequelize);

//Promesa: sincronizamos con la base de datos. Sincronizar las tablas.
sequelize.sync({force:false})
  .then(()=>{
      console.log('Tablas sincronizadas')
  });

// Exportemos los modelos (User y Film) a los controladores de la ruta.
module.exports = {
      User,
      Film
  }