const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
app.use(express.json());
app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'src', 'index.html')));
const server = http.createServer(app);
const ws = new WebSocket.Server({ server });
server.on('upgrade', (req, socket, head) => { ws.handleUpgrade(req, socket, head, socket => { socket.write(head); ws.emit('connection', socket, req); }); });
server.listen(8080, () => console.log('Listening on port 8080'));

