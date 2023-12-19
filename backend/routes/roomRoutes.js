const express = require("express");
const router = express.Router();
const { Server } = require("socket.io");
const roomController = require("../controller/roomController");
const io = new Server(); // Initialize socket.io

io.on("connection", (socket) => {
  roomController.handleSocketConnection(socket, io);
});

module.exports = router;
