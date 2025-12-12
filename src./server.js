const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));
app.listen(8080, () => console.log('Listening on port 8080'));
