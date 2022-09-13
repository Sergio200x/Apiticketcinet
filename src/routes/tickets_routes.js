import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/',controller.vista_tickets)
router.get('/semana_pasada',controller.vista_semana_pasada)

export default router