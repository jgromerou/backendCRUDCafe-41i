import { Router } from 'express';
import {
  borrarProducto,
  controladorPrueba,
  crearProducto,
  editarProducto,
  obtenerListaProductos,
  obtenerProducto,
} from '../controllers/productos.controllers';
import validarProducto from '../helpers/validarProducto';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router
  .route('/productos')
  .post(validarProducto, crearProducto)
  .get(obtenerListaProductos);
router
  .route('/productos/:id')
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(validarProducto, editarProducto);
export default router;
