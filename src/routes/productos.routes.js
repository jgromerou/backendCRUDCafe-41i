import { Router } from 'express';
import {
  borrarProducto,
  controladorPrueba,
  crearProducto,
  editarProducto,
  obtenerListaProductos,
  obtenerProducto,
} from '../controllers/productos.controllers';
import { check } from 'express-validator';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router
  .route('/productos')
  .post(
    [
      check('nombreProducto')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio.'),
    ],
    crearProducto
  )
  .get(obtenerListaProductos);
router
  .route('/productos/:id')
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);
export default router;
