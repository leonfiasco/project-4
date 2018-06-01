const Player = require('../models/player');

function indexRoute(req, res, next) {
  Player
    .find()
    .then(players => res.json(players))
    .catch(next);
}

function createRoute(req, res, next) {
  Player
    .create(req.body)
    .then(player => res.status(201).json(player))
    .catch(next);
}

function showRoute(req, res, next) {
  Player
    .findById(req.params.id)
    .exec()
    .then(player => res.json(player))
    .catch(next);
}

function updateRoute(req, res, next) {
  Player
    .findById(req.params.id)
    .then(player => {
      player = Object.assign(player, req.body);
      return player.save();
    })
    .then(player => {
      return res.json(player);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  Player
    .findById(req.params.id)
    .then(player => {
      return player.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
