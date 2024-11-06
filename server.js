// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; // Шлях до файлу з маршрутами

dotenv.config();  // Для роботи з .env файлами

const app = express();
app.use(express.json()); // Для обробки JSON запитів
app.use(cors());  // Для дозволу кросдоменної взаємодії

const PORT = process.env.PORT || 5000;

// Підключення до MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB підключено'))
  .catch(err => console.log(err));

// Використовуємо маршрути для реєстрації та авторизації
app.use('/api/auth', authRoutes);

// Запуск серверу
app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
