import { Request, Response } from 'express';
import { readJSON, writeJSON } from '../utils/fileStorage';
import { Cart, CartItem } from '../types/cart.types';
import { v4 as uuid } from 'uuid';
import path from 'path';

const ORDERS_PATH = '../database/orders.json';

interface AddToCartBody {
    productId: string;
    quantity: number;
}   

export const getCart = (req: Request, res: Response) => {
    const userId = req.cookies.userId as string;

    const carts: Cart[] = readJSON<Cart[]>(ORDERS_PATH);

    const cart: Cart | undefined = carts.find((c) => c.userId === userId);

    if (!cart) {
        const emptyCart: Cart = {
          id: uuid(),
          userId,
          items: []
        };

        return res.json(emptyCart);
    }

    res.json(cart);
};

export const addToCart = (req: Request, res: Response) => {
    const userId = req.cookies.userId as string;

    const { productId, quantity } = req.body as AddToCartBody;

    if (!productId || quantity <= 0) {
        res.status(400).json({ message: 'Invalid data' });
        return;
    }

    const carts: Cart[] = readJSON<Cart[]>(ORDERS_PATH);

    let cart: Cart | undefined = carts.find((c) => c.userId === userId);

    if (!cart) {
        cart = {
            id: uuid(),
            userId,
            items: []
        };
        carts.push(cart);
    }

    const item: CartItem | undefined = cart.items.find(
        (i) => i.productId === productId
    );

    if (item) {
        item.quantity += quantity;
    } else {
        const newItem: CartItem = { productId, quantity };
        cart.items.push(newItem);
    }

    writeJSON<Cart[]>(ORDERS_PATH, carts);

    res.json(cart);
};