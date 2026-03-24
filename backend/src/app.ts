import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes';
import cartRoutes from './routes/cart.routes';
import productRoutes from './routes/product.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);

export default app;