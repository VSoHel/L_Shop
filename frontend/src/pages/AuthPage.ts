export const AuthPage = (): string => {
  return `
    <div class="card">
      <h2>Вход и регистрация</h2>

      <form data-registration class="form">
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  `;
};