const express = require('express');
const https = require('https');
const passport = require('passport');
const socket = require('socket.io');
const cors = require('cors');

const router = require('./router');
const app = express();
const server = https.Server(app);
const io = socket(server);

app.use(cors);
app.use(express.json());
app.use(passport.initialize());
app.use('/', router);
app.set('io', io);

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
