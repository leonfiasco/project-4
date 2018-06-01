const router = require('express').Router();
const teams = require('../controllers/teams');
const players = require('../controllers/players');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/teams')
  .get(teams.index)
  .post(secureRoute, teams.create);

router.route('/teams/:id')
  .get(teams.show)
  .put(secureRoute, teams.update)
  .delete(teams.delete);

router.route('/players')
  .get(players.index)
  .post(secureRoute, players.create);

router.route('/players/:id')
  .get(players.show)
  .put(secureRoute, players.update)
  .delete(players.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
