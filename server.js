const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Sheena Hamilton');
});

app.listen(process.env.port || port);
console.log('Webserver listening on ' + (process.env.port || port));