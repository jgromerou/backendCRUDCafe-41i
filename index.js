import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import './src/database/dbConnection';
import productosRouter from './src/routes/productos.routes';
import usuariosRouter from './src/routes/usuarios.routes';

dotenv.config();

//configurar un puerto
//crear una instancia de Express
const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () => {
  console.log('Estoy en el puerto ' + app.get('PORT'));
});

//middlewares:
app.use(express.json()); // permite interpretar el formato JSON en un request
app.use(express.urlencoded({ extended: true })); //permite interpretar string y arrays del request
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); //me da info extra en la terminal

//cargar un archivo estático
app.use(express.static(path.join(__dirname, '/public')));

//rutas
// app.get('/prueba', (req, res) => {
//   res.send('Esta es una prueba de mi ruta GET de prueba');
// });

//http://localhost:4000/apicafe/prueba
app.use('/apicafe', productosRouter);
app.use('/apicafe/auth', usuariosRouter);
