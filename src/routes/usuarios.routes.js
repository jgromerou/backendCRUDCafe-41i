import { Router } from 'express';
import {
  crearUsuario,
  obtenerListaUsuarios,
  obtenerUsuario,
} from '../controllers/usuarios.controllers';

const router = new Router();

router.route('/usuarios').post(crearUsuario).get(obtenerListaUsuarios);
router.route('/usuarios/:id').get(obtenerUsuario);

export default router;
