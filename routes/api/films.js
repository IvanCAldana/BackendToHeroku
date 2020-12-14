const router = require('express').Router();
const { Film } = require('../../models');
// const userController = require('../../controllers/userController.js');
const bcrypt = require('bcryptjs');

//api/films
router.get('/',async(req,res)=>{
    const film = await Film.findAll();//consultar peliculas en DB
    res.status(200).json(film);
});

//api/films/register
router.post('/register', async(req, res)=>{
    const film = await Film.create(req.body);
    res.status(200).json(film);//crear peliculas en DB
})

module.exports = router;