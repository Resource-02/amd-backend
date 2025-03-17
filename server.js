import express from 'express';
import connectDB from './db/db_config.js'; // Use the `.js` extension for ES modules

const app = express();

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('MongoDB Connection Successful!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
