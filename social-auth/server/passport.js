const { Strategy: GithubStrategy } = require('passport-github');
const dotenv = require('dotenv');

dotenv.config();
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const githubSetup = {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/github/callback'
};
const socialCallback = (accessToken, refreshToken, profile, cb) => cb(null, profile);

const githubStrategy = new GithubStrategy(githubSetup, socialCallback);

module.exports = githubStrategy;
