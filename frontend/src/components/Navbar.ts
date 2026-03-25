export const Navbar = (): string => {
  return `
    <nav class="navbar">
      <a href="/" data-link>Home</a>
      <a href="/auth" data-link>Login</a>
      <a href="/cart" data-link>Cart</a>
      <a href="/delivery" data-link>Delivery</a>
    </nav>
  `;
};