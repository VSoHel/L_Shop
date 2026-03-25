import { router } from './router/router';
import { AuthPage } from './pages/AuthPage';
import { CartPage } from './pages/CartPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { Navbar } from './components/Navbar';

export const renderApp = () => {
  const app = document.getElementById('app');
  if (!app) return;

  const view = router();

  let content = '';

  if (view === 'auth') content = AuthPage();
  else if (view === 'cart') content = CartPage([]);
  else if (view === 'delivery') content = DeliveryPage();
 else content = `
  <div class="home">
    <h1 class="home-title">Музыкальный магазин</h1>
    <p class="home-subtitle">Инструменты для каждого музыканта</p>

    <div class="products">
      ${getMockProducts()}
    </div>
  </div>
`;

  app.innerHTML = `
    ${Navbar()}
    <div class="container">
      ${content}
    </div>
  `;

  setupLinks();
};

const setupLinks = () => {
  const links = document.querySelectorAll('[data-link]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (e.target as HTMLAnchorElement).getAttribute('href');
      if (!href) return;

      window.history.pushState({}, '', href);
      renderApp();
    });
  });
};

const getMockProducts = () => {
  const products = [
    {
      id: 1,
      name: "Акустическая гитара",
      price: 12000,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    },
    {
      id: 2,
      name: "Пианино",
      price: 55000,
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf"
    },
    {
      id: 3,
      name: "Электрогитара",
      price: 35000,
      image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787"
    },
    {
      id: 4,
      name: "Барабаны",
      price: 30000,
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7"
    }
  ];

  return products.map(p => `
    <div class="product-card">
      <img src="${p.image}" />
      <div class="product-card-content">
        <h3 data-title>${p.name}</h3>
        <p data-price>${p.price} р.</p>
        <button data-add="${p.id}">В корзину</button>
      </div>
    </div>
  `).join('');
};