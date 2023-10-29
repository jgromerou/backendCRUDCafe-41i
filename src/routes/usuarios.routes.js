import { Router } from 'express';
import {
  crearUsuario,
  login,
  obtenerListaUsuarios,
  obtenerUsuario,
  revalidarToken,
} from '../controllers/usuarios.controllers';
import validarJWT from '../helpers/token-verify';

const router = new Router();

router.route('/').post(login);
router.route('/revalidartoken').get(validarJWT, revalidarToken);
router.route('/usuarios').post(crearUsuario).get(obtenerListaUsuarios);
router.route('/usuarios/:id').get(obtenerUsuario);

export default router;
