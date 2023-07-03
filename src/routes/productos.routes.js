import { Router } from 'express';
import {
  controladorPrueba,
  crearProducto,
  obtenerListaProductos,
  obtenerProducto,
} from '../controllers/productos.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router.route('/productos').post(crearProducto).get(obtenerListaProductos);
router.route('/productos/:id').get(obtenerProducto);
export default router;
