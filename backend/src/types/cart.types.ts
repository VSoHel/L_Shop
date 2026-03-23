export interface CartItem {
    productId: string | number;
    quantity: number;
}

export interface Cart {
    Id: string | number;
    userId: string | number;
    items: CartItem[];
}