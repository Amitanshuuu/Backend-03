const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
