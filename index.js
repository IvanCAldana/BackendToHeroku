const express = require('express');//se trae express de la instalacion de express. Express es un framework de Js.
const morgan = require('morgan');//Middleware para mostrar por pantalla datos de encabezados de peticiones (puerto-tiempo-status). Importa morgan.
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
var cors = require('cors');

// instancia de express en mi app
const app = express(); //esta es la instanciacion de express
app.use(cors());

// app.use((req,res,next)=> {
//     res.header("Access-Control-Allow-Origin",'*');
//     res.header("Access-Control-Allow-Headers",'Origin,X-requested-with,Content-Type,Accept');
//     res.header("Access-Control-Allow-Methods: GET,POST,DELETE");
//     next();
// })

// middleware morgan para detectar peticiones
app.use(morgan('dev'));//decirle a mi app que use morgan para detectar peticiones y sus datos.
app.use(bodyParser.json());//modulo para enviar objetos Json() con info. a traves de la conexion por ruta.
app.use(bodyParser.urlencoded({ extended: true}));

//primera ruta en la raiz del proyecto.req: ver lo q el usuario nos envia. res: lo que enviamos al usuario como respuesta.
//Normal Function
// app.get('/',function(req,res){
//     res.send('hello world!');
// })

//Esto indica que ruta va a controlar a la api o el archivo x un controlador, usando un callback function.
// Arrow Function
app.get('/',(req,res)=>{
    res.send('Hello World!');
})

// toda ruta posee un controlador de ruta (app.use) que hace un llamado a un controlador
//.com/api/usuario
//.com/api/articulos
//.com/api/categorias
//.com/api/usuario/listar
//.com/api/usuario/registrar
//.com/api/usuario/login
//.com/apiv1/usuario/login
//.com/apiv2/usuario/login

app.use('/api',apiRouter);
// app.use('/about',aboutRouter);
// app.use('/our-company',companyRouter);



app.set('PORT',process.env.PORT||3000);//Fija el port al 3000 o el que asigne el sistema.

//app.listen(3000);// servidor en local host escuchando en puerto 3000
app.listen(app.get('PORT'),()=>{
    console.log('server up');//levanta el servidor y anuncia en el console Gitbash
});