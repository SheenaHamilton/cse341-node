const express = require('express');
const app = express();
const cors = require('cors');

const port = 8080;
app.use(cors());
app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Webserver listening on ' + (process.env.port || port));