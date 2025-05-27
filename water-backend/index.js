const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Fake database (for now)
let orders = [];

app.get('/', (req, res) => {
  res.send('🚰 Teflon Water Backend Running');
});

// Receive orders
app.post('/api/order', (req, res) => {
  const { name, area, quantity, mpesa } = req.body;
  const price = Number(quantity) * 10 + 30;

  const order = {
    id: Date.now(),
    name,
    area,
    quantity,
    mpesa,
    price,
    time: new Date().toLocaleString()
  };

  orders.push(order);

  res.status(200).json({
    message: 'Order received',
    receipt: order
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
