const express = require('express');
const passport = require('passport');
const router = express.Router();
const githubController = require('./controller');
let currentId;

const saveSocketId = (req, res, next) => {
    if(!req.query.socketId) return res.status(400).send({ error: 'no socket id'});
    currentId = req.query.socketId;
    next();
};

const addSocketIdToReq = (req, res, next) => {
    req.user.socketId = currentId;
    next();
};

router.get('/github', saveSocketId, passport.authenticate('github', { session: false }));
router.get(
    '/github/callback',
    passport.authenticate('github', { session: false }),
    addSocketIdToReq,
    githubController
    );

module.exports = router;
