//exportar el obj. sequelize creado en models/index.js, de tipo type: Sequelize
module.exports = (sequelize,type)=>{
    return sequelize.define('user', { //devuelve el modelo a exportar
        // Model attributes are defined here. Nuestra tabla es users. Aqui definimos sus campos.
        //llave primaria, no puede ser nula y debe ser autoincremental. Las propiedades de un atributo (id) se pasan como un objeto.
        id :{
            type:type.INTEGER,
            primaryKey: true,
            // allowNull: false,//usualmente va por defecto,entonces se omite.
            autoIncrement: true//cada registro va a estar enumerado 1,2,3...n.
        },
        name: type.STRING,
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING,       
      });
}