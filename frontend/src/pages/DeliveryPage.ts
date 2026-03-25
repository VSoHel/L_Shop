export const DeliveryPage = (): string => {
  return `
    <div class="card">
      <h2>Оформление доставки</h2>

      <form data-delivery class="form">
        <input placeholder="Адрес" required />
        <input placeholder="Телефон" required />
        <input placeholder="Email" required />
        <button type="submit">Оформить заказ</button>
      </form>
    </div>
  `;
};