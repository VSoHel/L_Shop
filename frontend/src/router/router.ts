export const router = (): string => {
  const path = window.location.pathname;

  if (path === '/auth') return 'auth';
  if (path === '/cart') return 'cart';
  if (path === '/delivery') return 'delivery';

  return 'home';
};