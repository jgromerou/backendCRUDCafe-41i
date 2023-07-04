import { Router } from 'express';
import {
  crearUsuario,
  obtenerListaUsuarios,
} from '../controllers/usuarios.controllers';

const router = new Router();

router.route('/usuarios').post(crearUsuario).get(obtenerListaUsuarios);

export default router;
