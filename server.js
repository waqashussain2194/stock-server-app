const express = require('express');
require('dotenv').config();
const http = require('http');
const cors = require('cors');
const stocksRouter = require('./src/routes/stocks.route');
const initializeDB = require('./src/db/db');
const { initSocketService } = require('./src/sockets/socketService');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

initializeDB();
initSocketService(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.BASE_CLIENT_URL
}));

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/stocks', stocksRouter);

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
