const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : '*',
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Myodin API is running', time: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/user', profileRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
