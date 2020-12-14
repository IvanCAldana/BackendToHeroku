const router = require('express').Router();//manejador de rutas de express.
const apiRouterUser = require('./api/users.js');
const apiRouterFilm = require('./api/films.js');

router.use('/user',apiRouterUser);//.com/api/user

router.use('/film',apiRouterFilm);//.com/api/film

//.com/api/user
//.com/api/user/listar
//.com/api/user/registrar
//.com/api/user/login

//.com/api/film
//.com/api/film/listar
//.com/api/film/registrar
//.com/api/film/login

// Exportar el router
module.exports = router;