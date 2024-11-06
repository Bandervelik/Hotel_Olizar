// routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Шлях до вашої моделі користувача
import bcrypt from 'bcryptjs';

const router = express.Router();

// Реєстрація
router.post('/register', async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Перевіряємо, чи користувач уже існує
    const userExists = await User.findOne({ phone });
    if (userExists) {
      return res.status(400).json({ message: 'Користувач з таким номером телефону вже існує' });
    }

    // Створюємо нового користувача
    const newUser = new User({ phone, password });

    // Зберігаємо користувача в базі даних
    await newUser.save();
    res.status(201).json({ message: 'Реєстрація успішна' });

  } catch (error) {
    res.status(500).json({ message: 'Помилка серверу', error });
  }
});

// Авторизація
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Знаходимо користувача по номеру телефону
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: 'Невірний номер телефону або пароль' });
    }

    // Перевіряємо пароль
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Невірний номер телефону або пароль' });
    }

    // Створюємо JWT токен
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Авторизація успішна', token });
  } catch (error) {
    res.status(500).json({ message: 'Помилка серверу', error });
  }
});

export default router;
