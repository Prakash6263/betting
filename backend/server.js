require('dotenv').config();
const { connectDB } = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Myodin API listening on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err.message || err);
  process.exit(1);
});
