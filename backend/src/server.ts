import app from './app';

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Сервер запускается с порта ${PORT}`);
});