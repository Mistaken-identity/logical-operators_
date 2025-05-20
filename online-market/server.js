const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is your online market backend.');
});

app.listen(port, () => {
  console.log(`Online market app listening at http://localhost:${port}`);
});