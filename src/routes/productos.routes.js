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
        .withMessage('El nombre del producto es obligatorio.')
        .isLength({
          min: 2,
          max: 100,
        })
        .withMessage(
          'El nombre del producto debe contener entre 2 y 100 caracteres'
        ),
      check('precio')
        .notEmpty()
        .withMessage('El precio es obligatorio.')
        .isNumeric()
        .withMessage('El precio debe ser un valor numérico.')
        .custom((precioProducto) => {
          if (precioProducto >= 1 && precioProducto <= 10000) {
            return true;
          } else {
            throw new Error('El precio debe estar entre 1 y 10000.');
          }
        }),
      check('imagen')
        .notEmpty()
        .withMessage('La URL de la imagen es un dato obligatorio.')
        .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
        .withMessage(
          'La imagen debe ser una URL válida, terminada en png,jpg,jpeg,gif y svg.'
        ),
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
