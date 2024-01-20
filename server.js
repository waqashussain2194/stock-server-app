const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for all requests
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
