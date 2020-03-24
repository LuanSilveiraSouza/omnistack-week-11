const http = require('http');
const express = require('express');
const cors = require('cors'); 
const routes = require('./routes')

const app = express();
const server = http.Server(app);

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333, () => {
    console.log("Server Listening at 3333");
});