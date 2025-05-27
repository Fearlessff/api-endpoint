const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const circulatingSupply = 1000000000;
const totalSupply = 999302618;

app.get('/', (req, res) => {
  res.send('Supply API is live. Use /api/total-supply or /api/circulating-supply.');
});

app.get('/api/total-supply', (req, res) => {
  res.json(totalSupply);
});

app.get('/api/circulating-supply', (req, res) => {
  res.json(circulatingSupply);
});

app.listen(port, () => {
  console.log(`Supply API running on http://localhost:${port}`);
});