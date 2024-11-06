import express from 'express';
import protect from './middleware/protect.js';

const app = express();

app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'Це захищений маршрут' });
});

export default app;
