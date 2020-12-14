const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.login = async(req,res,next) =>{//next le indica que continue en caso de que se quede pegada la ejecucion del controller.
    try{
        const user = await User.findOne({where: {email: req.body.email}});//busca el email en la DB
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password,user.password);//compara contraseña de peticion con la encriptada de DB
            if(passwordIsValid){
                const token = jwt.sign({  //recibo el token, guardo parametros de user
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol,
                },'config.secret',{
                    expiresIn:86400,// token expira en 24 hrs

                }
                );
                res.status(200).send({//enviar estatus correcto si usuario/password son validos y enviar token generado.
                    auth: true,
                    tokenReturn :token,
                    user: user
                })
            }else{
                res.status(401).json({//envio estatus 401 de password no valido, a pesar de autenticar email/user.
                    error:'error en contraseña'
                })
            }
        }else{
            res.status(404).json({//No existe el user. No se encontro en servidor
                error:'El usuario no es valido'
            })
        }
    }catch(error){
        res.status(500).send({//No hubo conexion con el servidor. (no coinciden los emails o no se encuentra en DB)
            message: 'Error->'
        })
        next(error);//para que continue ejecucion y salga del catch.
    }
};

exports.register = async(req,res,next) =>{
    try{

    }catch(error){

    }
};

exports.listar = async(req,res,next) =>{
    try{

    }catch(error){

    }
};