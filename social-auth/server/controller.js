const githubController = (req, res) => {
    const io = req.app.get('io');
    const user = { 
        name: req.user.username,
        photo: req.user.photos[0].value
    };
      io.in(req.user.socketId).emit('github', user);
};

module.exports = githubController;
