const router = require('express').Router();
const { User } = require('../../models');
// const{User,Articulo} = require('../../models'); Entre llaves, para traerme varios modelos
const userController = require('../../controllers/userController.js');
const bcrypt = require('bcryptjs');//Encripta contraseña que viene por request.


//ejemplos rutas a manejar. Necesitamos un enrutador para manejarlas.
//users/
//users/login
//users/create

//api/user/
//.com/api/user/    misitio.com/api/user/=>(usuario)
// traerse la lista de los usuarios con router.get; asincrono, puede demorarse un tiempo en recibir de la base de datos, luego de la peticion.
router.get('/',async(req,res)=>{
    const user = await User.findAll();//consultar usuarios en DB
    res.status(200).json(user);
});

//api/user/register
// metodo para registrar usuarios en DB.
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,10);// con hashSycn no se usa await. Con hash si se usa await. La constraseña se envia en req.body.pass...y se encripta 10 veces.
    const user = await User.create(req.body);
    res.status(200).json(user);//crear usuarios en DB
});

//api/user/login
router.post('/login',userController.login);
// router.post('/register',userController.register);
// router.post('/listar',userController.listar);


// Se debe exportar el router aqui
module.exports = router;