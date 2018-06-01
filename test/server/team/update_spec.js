/* global api, describe, it, expect, beforeEach */

const Team = require('../../../models/team');
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

const teamData = {
  name: 'East London Royals',
  members: [{
    name: 'Trae Young',
    position: 'PG',
    level: 'intermediate',
    tel: '07957754758',
    image: 'https://www.thestepien.com/wp-content/uploads/2018/03/trae-young.jpg'
  }],
  image: 'http://www.fetchlogos.com/wp-content/uploads/2015/11/East-London-Royals-Logo.jpg',
  location: {
    lat: 51.5200234,
    lng: -0.0614476
  }
};

const teamDataEdited = {
  name: 'Edited',
  members: [{
    name: 'Edited',
    position: 'Edited',
    level: 'Edited',
    tel: 'Edited',
    image: 'Edited'
  }],
  image: 'Edited',
  location: {
    lat: 51.5200234,
    lng: -0.0614476
  }
};

let token;
let teamId;

describe('PUT /teams/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Team.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => Team.create(teamData))
      .then(team => {
        teamId = team._id;
      })
      .then(() => done());
  });

  it('should return a 401 response if there is no token', done => {
    api
      .put(`/api/teams/${teamId}`)
      .send(teamData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/teams/${teamId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(teamData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object that has been edited correctly', done => {
    api
      .put(`/api/teams/${teamId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(teamDataEdited)
      .end((err, res) => {
        expect(res.body.grape).to.eq(teamDataEdited.grape);
        done();
      });
  });

});
