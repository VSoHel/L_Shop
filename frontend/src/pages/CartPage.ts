export const CartPage = (items: any[]): string => {
  return `
    <div class="card">
      <h2>Корзина</h2>
      ${items.length ? items.map(item => `
        <div class="cart-item">
          <div>
            <h3 data-title="basket">${item.productId}</h3>
            <p data-price="basket">${item.quantity}</p>
          </div>
        </div>
      `).join('') : '<p>Корзина пуста</p>'}
    </div>
  `;
};