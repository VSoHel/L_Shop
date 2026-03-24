import { Router } from 'express';
import { getCart, addToCart } from '../controllers/cart.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getCart);
router.post('/add', authMiddleware, addToCart);

export default router;