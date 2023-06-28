import { Router } from 'express';
import { controladorPrueba } from '../controllers/productos.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);

export default router;
