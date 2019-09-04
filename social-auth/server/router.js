const express = require('express');
const passport = require('passport');
const router = express.Router();
const githubController = require('./controller');

const addSocketIdtoSession = (req, res, next) => {
    req.socketId = req.query.socketId;
    next();
};

router.get('/github', addSocketIdtoSession, passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github'), githubController);

module.exports = router;
