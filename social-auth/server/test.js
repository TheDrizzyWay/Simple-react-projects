const express = require('express');
const app = express();
const passport = require('passport');
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const router = require('./router');
const githubStrategy = require('./passport');

app.use(cors);
app.use(express.json());
passport.use(githubStrategy);
app.use(passport.initialize());
app.set('io', io);
app.get('/', (req, res) => {
    res.send('yooooooo!!!!');
});
// app.use('/', router);

const port = 5000;
server.listen(port, () => console.log(`server running on port ${port}`));
