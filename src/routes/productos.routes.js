import { Router } from 'express';
import {
  borrarProducto,
  controladorPrueba,
  crearProducto,
  obtenerListaProductos,
  obtenerProducto,
} from '../controllers/productos.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router.route('/productos').post(crearProducto).get(obtenerListaProductos);
router.route('/productos/:id').get(obtenerProducto).delete(borrarProducto);
export default router;
