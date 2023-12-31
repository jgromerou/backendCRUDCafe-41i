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
import validarJWT from '../helpers/token-verify';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router
  .route('/productos')
  .post([validarJWT, validarProducto], crearProducto)
  .get(obtenerListaProductos);
router
  .route('/productos/:id')
  .get(obtenerProducto)
  .delete(validarJWT, borrarProducto)
  .put(validarJWT, validarProducto, editarProducto);
export default router;
