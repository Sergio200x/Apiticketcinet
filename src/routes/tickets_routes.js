import {Router} from 'express';
const router =Router();
import {tickets_controller} from '../controllers/tickets_controller.js'

router.get('/',tickets_controller.vista_tickets)

export default router