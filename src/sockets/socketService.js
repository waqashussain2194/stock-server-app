const socketIo = require('socket.io');
const { getAllWatchList } = require('../services/stocks.service');

let io;

const initSocketService = (server) => {
  io = socketIo(server, {
    cors: {
      origin: process.env.BASE_CLIENT_URL,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  const sendData = async () => {
    const data = await getAllWatchList();
    io.emit('FromAPI', data);
  };
  setInterval(sendData, 10000);
};

module.exports = { initSocketService };
