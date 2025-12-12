const path = require('path');
const express = require('express');
const http = require('http');
const { Server: WebSocketServer } = require('ws');
const app = express();
app.use(express.json());
app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'src', 'index.html')));
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
server.on('upgrade', (req, socket, head) => { wss.handleUpgrade(req, socket, head, (ws) => { wss.emit('connection', ws, req); }); });
server.listen(8080, () => console.log('Listening on port 8080'));

