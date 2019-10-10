const express = require('express');
const users = require('../models/Users');
const app = express.Router();

const game = {
    users: [],
    pictureCards: [],
    qouteCards: [],

    dealer: 0
}

app.post('/join', (req, res) => {
    const userId = req.query.userId;
    game.users.push( users[userId] );
    res.send(users[userId]);
});

module.exports = app;