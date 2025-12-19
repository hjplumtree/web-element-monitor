const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Web Element Monitor API Service');
});

// Endpoint to receive new monitoring targets
app.post('/targets', (req, res) => {
  // Logic to save target to Supabase
  res.status(201).json({ message: 'Target created', data: req.body });
});

app.listen(port, () => {
  console.log(`API Service listening on port ${port}`);
});
