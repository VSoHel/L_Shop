import { Request, Response } from 'express';
import {
  getAllProducts,
  searchProducts,
  filterProducts,
  sortProducts
} from '../services/product.service';

export const getProducts = (req: Request, res: Response) => {
  let products = getAllProducts();

  const { search, category, available, sort } = req.query;

  products = searchProducts(products, search as string);
  products = filterProducts(products, category as string, available as string);
  products = sortProducts(products, sort as string);

  res.json(products);
};
