import { readJSON } from '../utils/fileStorage';
import { Product } from '../types/product.types';

const PRODUCTS_PATH = '../database/products.json';

export const getAllProducts = (): Product[] => {
  return readJSON(PRODUCTS_PATH);
};

export const searchProducts = (products: Product[], search?: string) => {
  if (!search) return products;

  const query = search.toLowerCase();

  return products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
};

export const filterProducts = (
  products: Product[],
  category?: string,
  available?: string
) => {
  let result = products;

  if (category) {
    result = result.filter(p => p.category === category);
  }

  if (available) {
    result = result.filter(p => p.available === (available === 'true'));
  }

  return result;
};

export const sortProducts = (products: Product[], sort?: string) => {
  if (!sort) return products;

  if (sort === 'price_asc') {
    return [...products].sort((a, b) => a.price - b.price);
  }

  if (sort === 'price_desc') {
    return [...products].sort((a, b) => b.price - a.price);
  }

  return products;
};
