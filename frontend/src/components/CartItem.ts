type CartItemType = {
  productId: string;
  quantity: number;
};

export const CartItem = (item: CartItemType): string => {
  return `
    <div class="cart-item">
      <h3 data-title="basket">${item.productId}</h3>
      <p data-price="basket">${item.quantity}</p>

      <div class="cart-actions">
        <button data-plus="${item.productId}">+</button>
        <button data-minus="${item.productId}">-</button>
        <button data-remove="${item.productId}">Remove</button>
      </div>
    </div>
  `;
};