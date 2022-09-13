import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/',controller.vista_tickets)

export default router